import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Estrutura from './Components/Estrutura/Estrutura';
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