import { useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { useSelector } from 'react-redux';

const Dex = () => {
    return (
        <>
            <Dashboard />
            <PokemonList />
        </>
    );
};

export default Dex;
