import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Estrutura from './Components/Estrutura/Estrutura';
import Login from './routes/Login';
import PaginaInicial from './routes/PaginaInicial';
import FAQ from './routes/Faq';
import Integrantes from './routes/Integrantes';
import Contato from './routes/Contato';
import Tutoriais from './routes/Tutoriais';
import Suporte from './routes/Suporte';
import Lembretes from "./routes/Lembretes";
import Teleconsultas from "./routes/Teleconsulta";

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
        handle: { titulo: 'Página Inicial' },
      },
      {
        path: '/faq',
        element: <FAQ />,
        handle: { titulo: 'Perguntas Frequentes' },
      },
      {
        path: '/integrantes',
        element: <Integrantes />,
        handle: { titulo: 'Integrantes' },
      },
      {
        path: '/contato',
        element: <Contato />,
        handle: { titulo: 'Contato' },
      },
      {
        path: '/tutoriais',
        element: <Tutoriais />,
        handle: { titulo: 'Tutoriais em Vídeo' },
      },
      {
      path: "/suporte", 
      element: <Suporte />,
      handle: { titulo: 'Suporte' },
      },
      {
      path: "/lembretes",
      element: <Lembretes />,
       handle: { titulo: "Lembretes" },
      },
      {
      path: "/teleconsultas",
      element: <Teleconsultas />,
      handle: { titulo: "Teleconsultas" },
      }
    ],
  },
]);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;