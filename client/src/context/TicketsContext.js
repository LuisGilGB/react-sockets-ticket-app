import { createContext, useContext, useEffect, useReducer } from "react";
import { SocketContext } from "./SocketContext";

const ACTIONS = {
  EXPEND_TICKET: "EXPEND_TICKET",
  ATTEND_TICKET: "ATTEND_TICKET",
  UPDATE_DATA: "UPDATE_DATA",
  RESET: "RESET",
};

const initialState = {
  nextExpendableTicket: 1,
  nextAttendableTicket: null,
  queueData: [],
};

const reducer = (state, { type, payload }) => {
  const reducersForType = {
    [ACTIONS.EXPEND_TICKET]: () => ({
      nextExpendableTicket: state.nextExpendableTicket + 1,
      nextAttendableTicket:
        state.nextAttendableTicket || state.nextExpendableTicket,
    }),
    [ACTIONS.ATTEND_TICKET]: () => ({
      nextAttendableTicket: state.nextAttendableTicket + 1,
      queueData: [
        {
          ticket: state.nextAttendableTicket,
          desktopNumber: payload.desktopNumber,
        },
        ...state.queueData,
      ],
    }),
    [ACTIONS.UPDATE_DATA]: () => ({
      nextExpendableTicket: payload.nextExpendableTicket,
      queueData: payload.queueData.map(({ number, desktopNumber }) => ({
        ticketNumber: number,
        desktopNumber,
      })),
    }),
    [ACTIONS.RESET]: () => initialState,
  };

  return reducersForType[type]
    ? {
        ...state,
        ...reducersForType[type](),
      }
    : state;
};

export const TicketsContext = createContext();

export const TicketsProvider = ({ children }) => {
  const { socket } = useContext(SocketContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    socket.on("update-data", ({ payload }) => {
      dispatch({
        type: ACTIONS.UPDATE_DATA,
        payload,
      });
    });
  }, [socket]);

  const expendTicket = () => {
    socket.emit("expend-ticket", { payload: {} });
    // dispatch({ type: ACTIONS.EXPEND_TICKET, payload: {} });
  };

  const attendTicket = (desktopNumber) => {
    socket.emit("call-next-ticket", { payload: { desktopNumber } });
    // dispatch({ type: ACTIONS.ATTEND_TICKET, payload: { desktopNumber } });
  };

  const resetTicketsManager = () => {
    socket.emit("reset-queue", { payload: {} });
    // dispatch({ type: ACTIONS.RESET, payload: {} });
  };

  return (
    <TicketsContext.Provider
      value={{ ...state, expendTicket, attendTicket, resetTicketsManager }}
    >
      {children}
    </TicketsContext.Provider>
  );
};
