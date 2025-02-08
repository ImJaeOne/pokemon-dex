import PokemonCard from './PokemonCard';
import MOCK_DATA from '../mock-data';
import styled from 'styled-components';
import usePokemonActions from '../hooks/usePokemonActions';

const StPokemonList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const PokemonList = () => {
    const { handelClickPokemonCard, isSelected } = usePokemonActions();

    return (
        <StPokemonList onClick={handelClickPokemonCard}>
            {MOCK_DATA.map((item) => (
                <PokemonCard key={item.id} item={item} isSelected={isSelected(item)} />
            ))}
        </StPokemonList>
    );
};

export default PokemonList;
