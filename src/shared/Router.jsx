import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Dex from '../pages/Dex';
import PokemonDetail from '../pages/PokemonDetail';
import { usePokemonContext } from '../context/PokemonContext';

const Router = () => {
    const { myPokemon } = usePokemonContext();

    useEffect(() => {
        localStorage.setItem('pokemon', JSON.stringify(myPokemon));
    }, [myPokemon]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dex" element={<Dex />} />
                <Route path="/pokemon-detail" element={<PokemonDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
