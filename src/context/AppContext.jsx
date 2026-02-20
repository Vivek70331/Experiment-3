import { createContext, useContext, useReducer, useMemo } from "react";
import { appReducer, initialState } from "../reducer/appReducer";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const favoriteCount = useMemo(() => state.favorites.length, [state.favorites]);

  return (
    <AppContext.Provider value={{ state, dispatch, favoriteCount }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);