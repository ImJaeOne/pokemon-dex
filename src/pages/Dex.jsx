import { useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import { useSelector } from 'react-redux';

const Dex = () => {
    const myPokemon = useSelector((state) => state.myPokemon);

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
