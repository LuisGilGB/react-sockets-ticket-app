import { BrowserRouter as Router } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import { UiProvider } from "./context/UiContext";
import RouterPage from "./pages/RouterPage";

const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <UiProvider>
          <RouterPage />
        </UiProvider>
      </NavigationProvider>
    </Router>
  );
};

export default App;
