import { Outlet } from 'react-router-dom';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/Rodape';

function Estrutura() {
  return (
    <>
      <Cabecalho titulo="Título da Página" />
      <Outlet />
      <Rodape />
    </>
  );
}

export default Estrutura;