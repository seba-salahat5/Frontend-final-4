import React, { createContext, useContext, useState } from 'react';

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [scrollToComponent, setScrollToComponent] = useState(null);

  const setScrollTarget = (component) => {
    setScrollToComponent(component);
  };

  return (
    <ScrollContext.Provider value={{ scrollToComponent, setScrollTarget }}>
      {children}
    </ScrollContext.Provider>
  );
};
