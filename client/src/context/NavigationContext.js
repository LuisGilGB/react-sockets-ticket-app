import { createContext } from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import ROUTES from "../routes";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  const useRouteMatchExact = (path) => useRouteMatch({ path, exact: true });

  const inHomePath = useRouteMatchExact(ROUTES.ROOT);
  const inLoginPath = useRouteMatchExact(ROUTES.LOG_IN);
  const inQueuePath = useRouteMatchExact(ROUTES.QUEUE);
  const inTicketExpenderPath = useRouteMatchExact(ROUTES.TICKET_EXPENDER);
  const inDesktopPath = useRouteMatchExact(ROUTES.DESKTOP);

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
        location,
        params,
        inHomePath,
        inLoginPath,
        inQueuePath,
        inTicketExpenderPath,
        inDesktopPath,
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
