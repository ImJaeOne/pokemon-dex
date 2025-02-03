import { useNavigate,useLocation,  useSearchParams } from 'react-router-dom';
import MOCK_DATA from '../mock-data';
import styled from 'styled-components';

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

const StBackBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 10px;
    font-size: 15px;
    cursor: pointer;
`;

const PokemonDetail = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const query = Number(searchParams.get('id'));

    const pokemonDetail = MOCK_DATA.find((item) => item.id === query);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <StPokemonDetailContainer>
            <StPokemonImg src={pokemonDetail.img_url} />
            <StPokemonName>{pokemonDetail.korean_name}</StPokemonName>
            <StPokemonType>타입: {pokemonDetail.types?.join(', ')}</StPokemonType>
            <StPokemonDesc>{pokemonDetail.description}</StPokemonDesc>
            {/* {myPokemon.some((item) => item.id === query) ? (
                <StBtn onClick={removePokemon}>삭제</StBtn>
            ) : (
                <StBtn onClick={addPokemon}>등록</StBtn>
            )} */}
            <StBackBtn onClick={handleBack}>뒤로 가기</StBackBtn>
        </StPokemonDetailContainer>
    );
};

export default PokemonDetail;
