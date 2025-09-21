import { Link } from 'react-router-dom';
import claytonImg from '../../assets/img/clayton.jpeg';
import solaImg from '../../assets/img/sola.jpeg';
import pedroImg from '../../assets/img/pedro.jpeg';
import githubLogo from '../../assets/img/github-logo.png';
import linkedinLogo from '../../assets/img/linkedin-logo.png';
import { useAccessibility } from '../../contexts/AccessibilityContext';

export default function Integrantes() {
  const { fontSize, highContrast } = useAccessibility();
  const divClassName = highContrast ? 'alto-contraste' : '';

  return (
    <div className={divClassName} style={{ fontSize: fontSize === 'large' ? '1.2rem' : '1rem' }}>
      <div className="texto-integrantes">
        <h1>Conheça nossos integrantes</h1>
        <p>A seguir, apresentamos os membros do projeto Guia+. Sob o nome de cada integrante, você encontrará seus perfis no LinkedIn e GitHub.</p>
      </div>
      <div className="integrantes-container">
        <div className="integrantes-membros">
          <img src={claytonImg} alt="Clayton Alves dos Santos" />
          <h3>Clayton</h3>
          <p>Alves dos Santos</p>
          <a href="https://github.com/Claytonasantos" className="botao-github">
            <img src={githubLogo} alt="github-logo" /> Github
          </a>
          <a href="https://www.linkedin.com/in/clayton-alves-dos-santos-224281353/" className="botao-linkedin">
            <img src={linkedinLogo} alt="logo-linkedin" /> Linkedin
          </a>
        </div>
        <div className="integrantes-membros">
          <img src={solaImg} alt="Guilherme Sola Garcia" />
          <h3>Guilherme</h3>
          <p>Sola Garcia</p>
          <a href="https://github.com/guilhermesolagarcia" className="botao-github">
            <img src={githubLogo} alt="github-logo" /> Github
          </a>
          <a href="https://www.linkedin.com/in/guilherme-sola-garcia-8b8208351/" className="botao-linkedin">
            <img src={linkedinLogo} alt="logo-linkedin" /> Linkedin
          </a>
        </div>
        <div className="integrantes-membros">
          <img src={pedroImg} alt="Pedro Santos Pequini" />
          <h3>Pedro</h3>
          <p>Santos Pequini</p>
          <a href="https://github.com/PedroSPequini" className="botao-github">
            <img src={githubLogo} alt="github-logo" /> Github
          </a>
          <a href="https://www.linkedin.com/in/pedro-pequini-a47600346/" className="botao-linkedin">
            <img src={linkedinLogo} alt="logo-linkedin" /> Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}