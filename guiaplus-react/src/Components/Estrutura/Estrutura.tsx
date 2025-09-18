import { Outlet } from 'react-router-dom';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/Rodape';

function Estrutura() {
  return (
    <div className="container">
      <Cabecalho titulo="Título da página" />
      <Outlet />
      <Rodape />
    </div>
  );
}

export default Estrutura;