import { Link } from 'react-router-dom';
import MenuAcessibilidade from '../../Components/MenuAcessibilidade/index';
import logoCompleta from '../../assets/img/logo_completa.png';
import { useTheme } from '../../contexts/AccessibilityContext'; 

interface CabecalhoProps {
  titulo: string;
}

export default function Cabecalho({ titulo }: CabecalhoProps) {
  const { theme, toggleTheme } = useTheme(); 
  
  // A classe do tema agora é 'dark-mode' (Modo Escuro) ou vazia (Modo Claro)
  const navClassName = theme === 'dark' ? 'navbar dark-mode' : 'navbar';
  
  // A classe de aumento de fonte
  const linkClassName = theme === 'dark' ? 'dark-mode aumentar-fonte' : ''; 
  // Nota: A lógica de aumento de fonte deve ser ajustada para usar 'dark-mode aumentar-fonte' 
  // se você quiser que a fonte só aumente no modo escuro. Caso contrário, use a classe base.


  return (
    <nav className={navClassName}>
      <div className="header-inner-content">
        <div className="flex items-center space-x-4">
          <img src={logoCompleta} width="130px" height="70px" alt="Logo Guia+" />
          <h1 className="logo">
            {/* Aplica a classe de aumento de fonte ao título */}
            <span className={linkClassName}>{titulo}</span> 
          </h1>
        </div>
        
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6"> 
            {/* Aplica a classe de aumento de fonte nos links */}
            <li><Link to="/pagina-inicial" className={linkClassName}>Home</Link></li>
            <li><Link to="/faq" className={linkClassName}>Perguntas Frequentes</Link></li>
            <li><Link to="/integrantes" className={linkClassName}>Integrantes</Link></li>
            <li><Link to="/contato" className={linkClassName}>Contato</Link></li>
          </ul>
          {/* O MenuAcessibilidade vai ter o checkbox que chama toggleTheme */}
          <MenuAcessibilidade /> 
        </div>
      </div>
    </nav>
  );
}