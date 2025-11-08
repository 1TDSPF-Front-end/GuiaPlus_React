import React, { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    // Estado inicial: Tenta ler do localStorage ou usa 'light' como padrão
    const [theme, setThemeState] = useState<Theme>(() => {
        const savedTheme = localStorage.getItem('theme') as Theme;
        return savedTheme || 'light';
    });

    // Função de toggle (manual) para o botão
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    
    // Efeito para aplicar a classe 'dark-mode' ao body/html
    useEffect(() => {
        // Isso aplica a classe 'dark-mode' ou a remove (deixando o tema claro)
        document.documentElement.className = theme === 'dark' ? 'dark-mode' : '';
        // ⚠️ Adiciona classe de fonte se a lógica estiver no contexto
        // document.documentElement.classList.add(fontSize === 'large' ? 'aumentar-fonte' : '');
    }, [theme]); // Depende apenas da variável theme

    // O useEffect abaixo garante que, na primeira carga, o tema seja pego do sistema 
    // se NADA estiver salvo, mas sem causar loop.
    useEffect(() => {
        const checkSystemPreference = () => {
             if (!localStorage.getItem('theme')) {
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (prefersDark) {
                    setThemeState('dark');
                }
             }
        };
        // Tenta rodar a checagem do sistema apenas uma vez na montagem
        checkSystemPreference();
    }, []); 


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};