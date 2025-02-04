import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

export const PokemonContext = createContext();

export const usePokemonContext = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
    const [myPokemon, setMyPokemon] = useState(() => {
        return JSON.parse(localStorage.getItem('pokemon')) || [];
    });

    const addPokemon = (e, id) => {
        e.stopPropagation();
        if (myPokemon.some((item) => item.id === id)) {
            toast.error('이미 등록되어 있는 포켓몬입니다.');
            return;
        }
        if (myPokemon.length >= 6) {
            toast.error('최대 6마리까지 등록할 수 있습니다.');
            return;
        }
        setMyPokemon((prev) => {
            return [...prev, { ...item, isRegistered: true }];
        });
        toast.info(`등록 완료`);
    };

    const removePokemon = (e, id) => {
        e.stopPropagation();
        setMyPokemon((prev) => prev.filter((item) => item.id !== id));
        toast.info(`삭제 완료`);
    };

    return (
        <PokemonContext value={{myPokemon, setMyPokemon, addPokemon, removePokemon}}>
            {children}
        </PokemonContext>
    )
};
