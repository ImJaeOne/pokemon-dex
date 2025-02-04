import { useNavigate, useSearchParams } from 'react-router-dom';
import MOCK_DATA from '../mock-data';
import styled from 'styled-components';
import { usePokemonContext } from '../context/PokemonContext';

const StPokemonDetailContainer = styled.div`
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const StPokemonImg = styled.img`
    width: 250px;
    height: 250px;
`;

const StPokemonName = styled.div`
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 20px;
`;

const StPokemonType = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
`;

const StPokemonDesc = styled.div`
    font-size: 15px;
    margin-bottom: 20px;
`;

const StBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
`;

const PokemonDetail = () => {
    const [searchParams] = useSearchParams();
    const { myPokemon, addPokemon, removePokemon } = usePokemonContext();

    const query = Number(searchParams.get('id'));

    const pokemonDetail = MOCK_DATA.find((item) => item.id === query);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const isIncluded = myPokemon.some((pokemon) => pokemon.id === pokemonDetail.id);

    return (
        <StPokemonDetailContainer>
            <StPokemonImg src={pokemonDetail.img_url} />
            <StPokemonName>{pokemonDetail.korean_name}</StPokemonName>
            <StPokemonType>타입: {pokemonDetail.types?.join(', ')}</StPokemonType>
            <StPokemonDesc>{pokemonDetail.description}</StPokemonDesc>
            {isIncluded ? (
                <StBtn onClick={(e) => removePokemon(e, pokemonDetail)}>삭제</StBtn>
            ) : (
                <StBtn onClick={(e) => addPokemon(e, pokemonDetail)}>등록</StBtn>
            )}

            <StBtn onClick={handleBack}>뒤로 가기</StBtn>
        </StPokemonDetailContainer>
    );
};

export default PokemonDetail;
