// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css'; 
// 🚨 CORREÇÃO: Importa o ThemeProvider do caminho real do arquivo
import { ThemeProvider } from './contexts/AccessibilityContext'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Usa o ThemeProvider para envolver a aplicação e fornecer o contexto */}
    <ThemeProvider> 
        <App />
    </ThemeProvider>
  </React.StrictMode>
);