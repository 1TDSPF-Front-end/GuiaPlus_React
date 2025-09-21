import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react'; // Importação corrigida para o tipo

interface AccessibilityContextType {
  fontSize: 'normal' | 'large';
  highContrast: boolean;
  toggleFontSize: () => void;
  toggleHighContrast: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

interface AccessibilityProviderProps {
  children: ReactNode;
}

export const AccessibilityProvider: React.FC<AccessibilityProviderProps> = ({ children }) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [highContrast, setHighContrast] = useState(false);

  const toggleFontSize = () => {
    setFontSize(currentSize => (currentSize === 'normal' ? 'large' : 'normal'));
  };

  const toggleHighContrast = () => {
    setHighContrast(currentContrast => !currentContrast);
  };

  return (
    <AccessibilityContext.Provider value={{ fontSize, highContrast, toggleFontSize, toggleHighContrast }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};