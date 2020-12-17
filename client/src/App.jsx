import { BrowserRouter as Router } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import { UiProvider } from "./context/UiContext";
import { UserProvider } from "./context/UserContext";
import RouterPage from "./pages/RouterPage";

const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <UserProvider>
          <UiProvider>
            <RouterPage />
          </UiProvider>
        </UserProvider>
      </NavigationProvider>
    </Router>
  );
};

export default App;
