import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/components/themeToggle.sass"
import { Moon, Sun  } from 'lucide-react';

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="btnThemeToggle">
      {theme === "light" ? <Sun  size={18} color="#FCD803" fill="#FCD803" stroke="#FCD803"/> : <Moon color='#1CA4BE' size={18} fill="#1CA4BE" stroke="#1CA4BE"/> }
    </button>
  );
}

export default ThemeToggle;