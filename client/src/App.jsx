import { UiProvider } from "./context/UiContext";
import RouterPage from "./pages/RouterPage";

const App = () => {
  return (
    <UiProvider>
      <RouterPage />
    </UiProvider>
  );
};

export default App;
