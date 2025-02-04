import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('pokemon')) || [];

const pokemonSlice = createSlice({
    name: 'myPokemon',
    initialState,
    reducers: {
        addPokemon: (state, action) => {
            return [...state, { ...action.payload.pokemon, isRegistered: true }];
        },
        removePokemon: (state, action) => {
            return state.filter((myPokemon) => myPokemon.id !== action.payload.id);
        },
    },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
