import { createContext, useContext, useReducer } from "react";
import { NavigationContext } from "./NavigationContext";

const ACTIONS = {
  USER_LOG_IN: "USER_LOG_IN",
  USER_LOG_OUT: "USER_LOG_OUT",
};

const initialState = {
  loggedIn: false,
  userName: null,
  userDesktop: null,
};

const reducer = (state, { type, payload }) => {
  const reducersForType = {
    [ACTIONS.USER_LOG_IN]: () => ({
      loggedIn: true,
      userName: payload.userName,
      userDesktop: payload.userDesktop,
    }),
    [ACTIONS.USER_LOG_OUT]: () => initialState,
  };

  return reducersForType[type]
    ? {
        ...state,
        ...reducersForType[type](),
      }
    : state;
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { goToLogin } = useContext(NavigationContext);
  const [state, dispatch] = useReducer(reducer, initialState);

  const logIn = (userName, userDesktop) => {
    dispatch({
      type: ACTIONS.USER_LOG_IN,
      payload: { userName, userDesktop },
    });
  };

  const logOut = () => {
    goToLogin();
    dispatch({
      type: ACTIONS.USER_LOG_OUT,
      payload: {},
    });
  };

  return (
    <UserContext.Provider value={{ logIn, logOut, ...state }}>
      {children}
    </UserContext.Provider>
  );
};
