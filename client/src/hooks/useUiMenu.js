import { useContext } from "react";
import { UiContext } from "../context/UiContext";

export const useUiMenu = () => {
  const { hiddenMenu, toggleHiddenMenu } = useContext(UiContext);
};
