import ThemeProvider from "./ThemeContext";
import Navbar from "./Navbar";
import Button from "./Button";
import "../App.css";

export default function App() {
    return (
        <ThemeProvider>
            <div className="app">
                <Navbar />
                <Button />
            </div>
        </ThemeProvider>
    );
}
