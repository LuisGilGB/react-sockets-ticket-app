import { createContext, useState } from "react";

export const UiContext = createContext();

export const UiProvider = ({ children }) => {
  const [hiddenMenu, setHiddenMenu] = useState(false);

  const showMenu = () => {
    setHiddenMenu(true);
  };

  const hideMenu = () => {
    setHiddenMenu(false);
  };

  const toggleHiddenMenu = () => {
    setHiddenMenu(!hiddenMenu);
  };

  return (
    <UiContext.Provider
      value={{ hiddenMenu, showMenu, hideMenu, toggleHiddenMenu }}
    >
      {children}
    </UiContext.Provider>
  );
};
