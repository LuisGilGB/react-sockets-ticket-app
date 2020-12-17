import { BrowserRouter as Router } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import { SocketProvider } from "./context/SocketContext";
import { TicketsProvider } from "./context/TicketsContext";
import { UiProvider } from "./context/UiContext";
import { UserProvider } from "./context/UserContext";
import RouterPage from "./pages/RouterPage";

const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <UserProvider>
          <SocketProvider>
            <TicketsProvider>
              <UiProvider>
                <RouterPage />
              </UiProvider>
            </TicketsProvider>
          </SocketProvider>
        </UserProvider>
      </NavigationProvider>
    </Router>
  );
};

export default App;
