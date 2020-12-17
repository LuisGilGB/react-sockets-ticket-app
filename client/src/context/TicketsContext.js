import { createContext, useReducer } from "react";

const ACTIONS = {
  EXPEND_TICKET: "EXPEND_TICKET",
  ATTEND_TICKET: "ATTEND_TICKET",
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
  const [state, dispatch] = useReducer(reducer, initialState);

  const expendTicket = () => {
    dispatch({ type: ACTIONS.EXPEND_TICKET, payload: {} });
  };

  const attendTicket = (desktopNumber) => {
    dispatch({ type: ACTIONS.ATTEND_TICKET, payload: { desktopNumber } });
  };

  const resetTicketsManager = () => {
    dispatch({ type: ACTIONS.RESET, payload: {} });
  };

  return (
    <TicketsContext.Provider
      value={{ ...state, expendTicket, attendTicket, resetTicketsManager }}
    >
      {children}
    </TicketsContext.Provider>
  );
};
