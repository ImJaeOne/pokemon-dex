import styled from 'styled-components';
import pokemonBall from '../assets/pokeball-13iwdk7Y.png';

const StPokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 120px;
    padding: 20px;
    cursor: pointer;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    background-color: white;

    &:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
`;

const StDashBoardImg = styled.img`
    width: 50px;
`;

const StPokemonImg = styled.img`
    width: 100px;
    height: 100px;
`;
const StPokemonName = styled.div`
    font-weight: bold;
`;

const StPokemonId = styled.div`
    color: #bbbbbb;
`;

const StPokemonBtn = styled.button`
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
`;

const PokemonCard = ({ item = {} }) => {
    return (
        <StPokemonCard>
            {Object.keys(item).length === 0 ? (
                <StDashBoardImg src={pokemonBall} />
            ) : (
                <>
                    <StPokemonImg src={item.img_url} />
                    <StPokemonName>{item.korean_name}</StPokemonName>
                    <StPokemonId>No. {String(item.id).padStart(3, '0')}</StPokemonId>
                    <StPokemonBtn>등록</StPokemonBtn>
                </>
            )}
        </StPokemonCard>
    );
};

export default PokemonCard;
