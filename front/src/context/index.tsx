"use client";
import React, { useState, useContext, createContext } from "react";

const AppContext = createContext<any>([]);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState([]);
  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
