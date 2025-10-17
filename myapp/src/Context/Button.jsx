import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Button() {
    const { theme } = useContext(ThemeContext);

    return (
        <button
            style={{
                backgroundColor: theme === "light" ? "#fff" : "#444",
                color: theme === "light" ? "#000" : "#fff",
                padding: "10px 20px",
                marginTop: "20px",
                border: "none",
                borderRadius: "5px",
            }}
        >
            Click Me
        </button>
    );
}
