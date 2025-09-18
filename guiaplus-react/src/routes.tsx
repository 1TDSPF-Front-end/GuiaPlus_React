import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importa o componente de layout que contém o cabeçalho e rodapé
// Cuidado com a primeira letra maiúscula! Mude para `components`
import Estrutura from './Components/Estrutura/Estrutura';

// Importa todos os componentes de página da pasta 'routes'
import Login from './routes/Login';
import PaginaInicial from './routes/PaginaInicial';
import FAQ from './routes/Faq';
import Integrantes from './routes/Integrantes';
import Contato from './routes/Contato';
import Tutoriais from './routes/Tutoriais';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    // Rota pai que usa o componente de Estrutura como layout
    element: <Estrutura />,
    children: [
      {
        path: '/pagina-inicial',
        element: <PaginaInicial />,
      },
      {
        path: '/faq',
        element: <FAQ />,
      },
      {
        path: '/integrantes',
        element: <Integrantes />,
      },
      {
        path: '/contato',
        element: <Contato />,
      },
      {
        path: '/tutoriais',
        element: <Tutoriais />,
      },
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;