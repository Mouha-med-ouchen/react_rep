export default function LanguageSwitcher({ onLanguageChange }) {

    const handleLangChange = (e) => {
        e.preventDefault();
        const lang = e.currentTarget.dataset.lang; // نحصل على اللغة المختارة
        console.log("Selected language:", lang);
        onLanguageChange(lang); // نرسلها إلى المكون الأب
    };

    return (
        <ul className="nav justify-content-center mt-3">
            {["FR", "AR", "ENG", "ESP"].map((lang) => (
                <li className="nav-item" key={lang}>
                    <a
                        href="#"
                        className="nav-link active"
                        data-lang={lang}
                        onClick={handleLangChange}
                    >
                        {lang}
                    </a>
                </li>
            ))}
        </ul>
    );
}
