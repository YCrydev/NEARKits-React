import { useState } from "react";
import { createContext } from "react";

export const SidebarContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };
  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
