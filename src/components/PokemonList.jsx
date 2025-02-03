import PokemonCard from './PokemonCard';
import MOCK_DATA from '../mock-data';
import styled from 'styled-components';

const StPokemonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const PokemonList = ({setMyPokemon}) => {
    return (
        <StPokemonList>
            {MOCK_DATA.map((item) => (
                <PokemonCard key={item.id} item={item} setMyPokemon={setMyPokemon}/>
            ))}
        </StPokemonList>
    );
};

export default PokemonList;
