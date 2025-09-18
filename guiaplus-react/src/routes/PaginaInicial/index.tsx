import { Link } from 'react-router-dom';
import lembretesIcon from '../../assets/img/lembretes-icon.png';
import suporteImg from '../../assets/img/suporte-img.png';
import teleconsultaIcon from '../../assets/img/teleconsulta-icon.png';
import videosImg from '../../assets/img/videos-img.png';

export default function PaginaInicial() {
  return (
    <>
      <div className="texto-pagina-inicial">
        <h1>Funcionalidades</h1>
        <p>Guia+ oferece uma experiência simples e acessível para usuários de todas as idades. Nosso site possui uma variedade de recursos, incluindo lembretes, suporte direto, acesso a teleconsultas e tutoriais explicativos.</p>
      </div>

      <div className="funcoes-container">
        <div className="funcao">
          <Link to="#">
            <img className="lembrete-img" src={lembretesIcon} alt="lembretes" />
            <h2>Agendar Lembrete</h2>
          </Link>
        </div>
        <div className="funcao">
          <Link to="#">
            <img className="suporte-img" src={suporteImg} alt="suporte" />
            <h2>Suporte</h2>
          </Link>
        </div>
        <div className="funcao">
          <Link to="#">
            <img className="teleconsulta" src={teleconsultaIcon} alt="teleconsultas" />
            <h2>Teleconsultas</h2>
          </Link>
        </div>
        <div className="funcao">
          <Link to="/tutoriais">
            <img className="videos-img" src={videosImg} alt="videos" />
            <h2>Tutoriais</h2>
          </Link>
        </div>
      </div>
    </>
  );
}