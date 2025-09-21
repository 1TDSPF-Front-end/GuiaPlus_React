import { Link } from 'react-router-dom';
import logoCompleta from '../../assets/img/logo_completa.png'; 
import { AccessibilityProvider } from '../../contexts/AccessibilityContext';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export default function Rodape() {
    const { fontSize, highContrast } = useAccessibility();
    const mainClassName = highContrast ? 'alto-contraste' : '';
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