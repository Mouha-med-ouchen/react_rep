import { useState } from "react";
import LanguagSwitcher from "./LanguagSwitcher";
export default function Page() {
    const [lang, setLang] = useState('AR');

    const handleLanguageChange = (lang) => {
        console.log("App received language:", lang);
        setLang(lang)

    };

    return (
        <div className="container">
            <h1>Language Switcher Example</h1>
            <LanguagSwitcher onLanguageChange={handleLanguageChange} />
            <h1>current_languge is :{lang}</h1>
        </div>
    );
}
