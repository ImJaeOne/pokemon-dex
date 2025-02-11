import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import PokemonDetail from '../pages/PokemonDetail';

const publicRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: 'dex',
        element: <Dex />,
    },
    {
        path: '/pokemon-detail',
        element: <PokemonDetail />,
    },
];

const router = createBrowserRouter([...publicRoutes]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;
