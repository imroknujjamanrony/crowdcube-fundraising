import { useTheme } from "../context/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="btn btn-primary">
      {theme === "light" ? "Switch to Dark" : "Switch to Light"}
    </button>
  );
};

export default ThemeToggle;
