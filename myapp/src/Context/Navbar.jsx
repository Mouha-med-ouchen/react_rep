import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav
            style={{
                backgroundColor: theme === "light" ? "#f8f9fa" : "#222",
                color: theme === "light" ? "#000" : "#fff",
                padding: "10px",
                textAlign: "center",
            }}
        >
            <h2>My React App ({theme} mode)</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    );
}
