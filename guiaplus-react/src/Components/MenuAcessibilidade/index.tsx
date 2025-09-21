import { useState } from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export default function MenuAcessibilidade() {
  const [menuAberto, setMenuAberto] = useState(false);
  const { fontSize, highContrast, toggleFontSize, toggleHighContrast } = useAccessibility();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="botao-acessibilidade"
      >
        Acessibilidade
      </button>

      {menuAberto && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <div className="px-4 py-2 flex items-center space-x-2">
            <input 
              type="checkbox" 
              id="aumentar-fonte" 
              checked={fontSize === 'large'} 
              onChange={toggleFontSize} 
            />
            <label htmlFor="aumentar-fonte" className="text-sm text-gray-700">
              Aumentar Fonte
            </label>
          </div>
          <div className="px-4 py-2 flex items-center space-x-2">
            <input 
              type="checkbox" 
              id="alto-contraste" 
              checked={highContrast} 
              onChange={toggleHighContrast} 
            />
            <label htmlFor="alto-contraste" className="text-sm text-gray-700">
              Alto Contraste
            </label>
          </div>
        </div>
      )}
    </div>
  );
}