const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const VerPeliculaPage = require('./pages/ver-pelicula');
const EditarPeliculaPage = require('./pages/editar-pelicula');
const NuevoPeliculaPage = require('./pages/nuevo-pelicula');
const VerClientePage = require('./pages/ver-cliente');
const EditarClientePage = require('./pages/editar-cliente');
const NuevoClientePage = require('./pages/nuevo-cliente');
const VerBoletoPage = require('./pages/ver-boleto');
const NuevoBoletoPage = require('./pages/nuevo-boleto');

const router = createBrowserRouter([
    { path:'/', element:<HomePage/>},
    { path: '/ver-pelicula/:id', element: <VerPeliculaPage /> },
    { path: '/editar-pelicula/:id', element: <EditarPeliculaPage /> },
    { path: '/nuevo-pelicula', element: <NuevoPeliculaPage /> },
    { path: '/ver-cliente/:id', element: <VerClientePage /> },
    { path: '/editar-cliente/:id', element: <EditarClientePage /> },
    { path: '/nuevo-cliente', element: <NuevoClientePage /> },
    { path: '/ver-boleto/:id', element: <VerBoletoPage /> },
    { path: '/ver-boleto/:id/nuevo-cliente', element: <NuevoBoletoPage /> }

])



ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>  ,
    document.getElementById('react'))
