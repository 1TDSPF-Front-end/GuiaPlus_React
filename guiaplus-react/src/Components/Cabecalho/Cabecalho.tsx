import { Link } from 'react-router-dom';
import MenuAcessibilidade from '../../Components/MenuAcessibilidade/index';
import logoCompleta from '../../assets/img/logo_completa.png';

interface CabecalhoProps {
  titulo: string;
}

export default function Cabecalho({ titulo }: CabecalhoProps) {
  return (
    <nav className="navbar">
      <div className="header-inner-content">
        <div className="flex items-center space-x-4">
          <img src={logoCompleta} width="130px" height="70px" alt="Logo Guia+" />
          <h1 className="logo">{titulo}</h1>
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-6">
            <li><Link to="/pagina-inicial">Home</Link></li>
            <li><Link to="/faq">Perguntas Frequentes</Link></li>
            <li><Link to="/integrantes">Integrantes</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
          <MenuAcessibilidade />
        </div>
      </div>
    </nav>
  );
}