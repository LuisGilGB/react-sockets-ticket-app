import { createContext } from "react";
import { useHistory } from "react-router-dom";
import ROUTES from "../routes";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const history = useHistory();

  const goToPath = (path) => {
    history.push(path);
  };

  const customGoTo = (path) => () => {
    goToPath(path);
  };

  const goToHome = customGoTo(ROUTES.ROOT);
  const goToLogin = customGoTo(ROUTES.LOG_IN);
  const goToQueue = customGoTo(ROUTES.QUEUE);
  const goToTicketExpender = customGoTo(ROUTES.TICKET_EXPENDER);
  const goToDesktop = customGoTo(ROUTES.DESKTOP);

  return (
    <NavigationContext.Provider
      value={{
        goToPath,
        goToHome,
        goToLogin,
        goToQueue,
        goToTicketExpender,
        goToDesktop,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
