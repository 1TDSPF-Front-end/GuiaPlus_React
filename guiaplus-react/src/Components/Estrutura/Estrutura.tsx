import { Outlet } from 'react-router-dom';
import Cabecalho from '../Cabecalho/Cabecalho';
import Rodape from '../Rodape/Rodape';

export default function Layout() {
  return (
    <>
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </>
  );
}
