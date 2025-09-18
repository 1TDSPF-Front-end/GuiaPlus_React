import { useState } from 'react';

export default function MenuAcessibilidade() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className="relative">
      <button 
        onClick={toggleMenu} 
        className="botao-acessibilidade bg-gray-500 text-white font-bold py-2 px-4 rounded"
      >
        Acessibilidade
      </button>

      {menuAberto && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
            Aumentar Fonte
          </button>
          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
            Alto Contraste
          </button>
          <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
            Menu de Voz
          </button>
        </div>
      )}
    </div>
  );
}