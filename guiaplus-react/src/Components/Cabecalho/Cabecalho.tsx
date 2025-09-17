import { Link } from 'react-router-dom';
import logoCompleta from '../../img/logo_completa.png'; // Verifique o caminho da imagem




export default function Cabecalho({ titulo }: CabecalhoProps) {
  return (
    <nav className="navbar show-menu">
      <div className="header-inner-content">
        <img src={logoCompleta} width="130px" height="70px" alt="Logo Guia+" />
        <h1 className="logo">{titulo}</h1>
        <nav>
          <ul>
            <li><Link to="/pagina-inicial">Home</Link></li>
            <li><Link to="/faq">Perguntas Frequentes</Link></li>
            <li><Link to="/integrantes">Integrantes</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><button className="botao-acessibilidade"><Link to="/solucao">Solução/Proposta</Link></button></li>
          </ul>
        </nav>
      </div>
    </nav>
  );
}