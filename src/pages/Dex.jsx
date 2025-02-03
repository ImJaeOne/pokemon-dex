import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

const Dex = () => {
    const [myPokemon, setMyPokemon] = useState([]);
    return (
        <>
            <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon}/>
            <PokemonList setMyPokemon={setMyPokemon} />
        </>
    );
};

export default Dex;
