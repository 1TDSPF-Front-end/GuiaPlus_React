import { Outlet, useMatches } from 'react-router-dom';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/Rodape';

function Estrutura() {
  const matches = useMatches();
  const tituloDaRota = (matches[matches.length - 1]?.handle as { titulo: string } | undefined)?.titulo || 'Título Padrão';
  
  return (
    // O div.container precisa ser o wrapper principal
    <div className="container">
      <Cabecalho titulo={tituloDaRota} />
      <main className="main-content">
        <Outlet />
      </main>
      <Rodape />
    </div>
  );
}