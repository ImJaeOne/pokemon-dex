import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import PokemonDetail from '../pages/PokemonDetail';

const Router = () => {
    const [myPokemon, setMyPokemon] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dex" element={<Dex myPokemon={myPokemon} setMyPokemon={setMyPokemon} />} />
                <Route
                    path="/pokemon-detail"
                    element={<PokemonDetail myPokemon={myPokemon} setMyPokemon={setMyPokemon} />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
