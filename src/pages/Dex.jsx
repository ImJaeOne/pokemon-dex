import React, { useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { usePokemonContext } from '../context/PokemonContext';

const Dex = () => {
    const { myPokemon } = usePokemonContext();

    useEffect(() => {
        localStorage.setItem('pokemon', JSON.stringify(myPokemon));
    }, [myPokemon]);
    return (
        <>
            <Dashboard />
            <PokemonList />
        </>
    );
};

export default Dex;
