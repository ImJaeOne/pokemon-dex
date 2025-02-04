import React, { useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { usePokemonContext } from '../context/PokemonContext';

const Dex = () => {
    
    return (
        <>
            <Dashboard />
            <PokemonList />
        </>
    );
};

export default Dex;
