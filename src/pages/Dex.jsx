import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

const Dex = () => {
    const [myPokemon, setMyPokemon] = useState(() => {
        return JSON.parse(localStorage.getItem('pokemon')) || [];
    });

    useEffect(() => {
        localStorage.setItem('pokemon', JSON.stringify(myPokemon));
    }, [myPokemon]);
    return (
        <>
            <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
            <PokemonList myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
        </>
    );
};

export default Dex;
