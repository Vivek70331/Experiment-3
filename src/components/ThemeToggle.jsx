import { useAppContext } from "../context/AppContext";
import { useEffect } from "react";

export default function ThemeToggle() {
  const { state, dispatch } = useAppContext();

  // Apply theme to <body>
  useEffect(() => {
    document.body.className = state.theme;
  }, [state.theme]);

  return (
    <button className="theme-btn" onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      {state.theme === "light" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}