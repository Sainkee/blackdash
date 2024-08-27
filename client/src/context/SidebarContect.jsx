// src/context/SidebarContext.js
import React, { createContext, useState, useContext } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isLocked, setIsLocked] = useState(false);

  const toggleSidebar = (expand) => setIsExpanded(expand);
  const toggleLock = () => {
    setIsLocked(!isLocked);
  
  };

  return (
    <SidebarContext.Provider
      value={{
        isExpanded,
        isLocked,
        toggleSidebar,
        toggleLock,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
