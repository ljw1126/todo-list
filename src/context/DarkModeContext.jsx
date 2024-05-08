import {createContext, useContext, useEffect, useState} from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    }

    // Provider mount 되었을 때 실행 (단 한번)
    useEffect(() => {
        const isDark = (localStorage.theme === 'dark' || (!('theme' in localStorage)
                    && window.matchMedia('(prefers-color-scheme: dark)').matches));
        setDarkMode(isDark);
        updateDarkMode(isDark);
    }, []);

    return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function updateDarkMode(darkMode) {
    // html 태그 class 추가
    if(darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
    } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    }
}

// 편의 hook
export const useDarkMode = () => useContext(DarkModeContext);
