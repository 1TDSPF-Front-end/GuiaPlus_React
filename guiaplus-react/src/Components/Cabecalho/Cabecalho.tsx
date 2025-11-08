import { Link } from 'react-router-dom';
import MenuAcessibilidade from '../../Components/MenuAcessibilidade/index';
import logoCompleta from '../../assets/img/logo_completa.png';
import { useAccessibility } from '../../contexts/AccessibilityContext';

interface CabecalhoProps {
  titulo: string;
}

export default function Cabecalho({ titulo }: CabecalhoProps) {
  const { fontSize, highContrast } = useAccessibility(); 
  const navClassName = highContrast ? 'navbar alto-contraste' : 'navbar';
  const linkClassName = fontSize === 'large' ? 'aumentar-fonte' : '';

  return (
    <nav className={navClassName}>
      <div className="header-inner-content">
        <div className="flex items-center space-x-4">
          <img src={logoCompleta} width="130px" height="70px" alt="Logo Guia+" />
          <h1 className="logo">
            <span className={linkClassName}>{titulo}</span>
          </h1>
        </div>
        
        {/* CORREÇÃO AQUI: Garante que o menu de navegação seja Flexbox */}
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6"> {/* Aplica a regra de linha aqui */}
            <li><Link to="/pagina-inicial" className={linkClassName}>Home</Link></li>
            <li><Link to="/faq" className={linkClassName}>Perguntas Frequentes</Link></li>
            <li><Link to="/integrantes" className={linkClassName}>Integrantes</Link></li>
            <li><Link to="/contato" className={linkClassName}>Contato</Link></li>
          </ul>
          <MenuAcessibilidade />
        </div>
      </div>
    </nav>
  );
}