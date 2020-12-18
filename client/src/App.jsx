import { BrowserRouter as Router } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import { SocketProvider } from "./context/SocketContext";
import { TicketsProvider } from "./context/TicketsContext";
import { UserProvider } from "./context/UserContext";
import RouterPage from "./pages/RouterPage";

const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <UserProvider>
          <SocketProvider>
            <TicketsProvider>
              <RouterPage />
            </TicketsProvider>
          </SocketProvider>
        </UserProvider>
      </NavigationProvider>
    </Router>
  );
};

export default App;
