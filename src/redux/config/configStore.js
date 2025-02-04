import { configureStore } from "@reduxjs/toolkit";
import myPokemon from '../slices/pokemonSlice'

const store = configureStore({
    reducer:{myPokemon}
});

export default store;