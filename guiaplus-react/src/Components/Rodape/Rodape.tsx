import { Link } from 'react-router-dom';
import logoCompleta from '../../img/logo_completa.png'; // Verifique o caminho da imagem

export default function Rodape() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoCompleta} alt="Logo Guia+" width="120" />
          <p>Projeto Guia+ © 2025</p>
        </div>
        <div className="footer-links">
          <Link to="/pagina-inicial">Home</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/integrantes">Integrantes</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/solucao">Solução/Proposta</Link>
        </div>
      </div>
    </footer>
  );
}