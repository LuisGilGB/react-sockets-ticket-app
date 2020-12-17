import { BrowserRouter as Router } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import { TicketsProvider } from "./context/TicketsContext";
import { UiProvider } from "./context/UiContext";
import { UserProvider } from "./context/UserContext";
import RouterPage from "./pages/RouterPage";

const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <UserProvider>
          <TicketsProvider>
            <UiProvider>
              <RouterPage />
            </UiProvider>
          </TicketsProvider>
        </UserProvider>
      </NavigationProvider>
    </Router>
  );
};

export default App;
