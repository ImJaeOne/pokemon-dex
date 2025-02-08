import { useNavigate, useSearchParams } from 'react-router-dom';
import MOCK_DATA from '../mock-data';
import styled from 'styled-components';
import usePokemonActions from '../hooks/usePokemonActions';

const StPokemonDetailContainer = styled.div`
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const StPokemonCard = styled.div`
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

const StPokemonHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 400px;
`;

const StPokemonNumber = styled.div`
    font-size: 18px;
    color: rgba(0, 0, 0, 0.5); /* 흐린 효과 */
    font-weight: bold;
    margin-right: 10px;
`;

const StPokemonName = styled.div`
    font-weight: bold;
    font-size: 30px;
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
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    color: white;
    background-color: #444444;
`;

const StAddBtn = styled(StBtn)`
    background-color: #6bcb77;
`;

const StReomveBtn = styled(StBtn)`
    background-color: #ff6b6b;
`;

const StNavigation = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 400px;
    margin-top: 20px;
`;

const PokemonDetail = () => {
    const [searchParams] = useSearchParams();
    const query = Number(searchParams.get('id'));
    const { handleClickPokemonCard, isSelected } = usePokemonActions();

    const pokemonDetail = MOCK_DATA.find((item) => item.id === query);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/dex');
    };

    const handlePrev = () => {
        const prevId = query > 1 ? query - 1 : MOCK_DATA.length;
        navigate(`?id=${prevId}`);
    };

    const handleNext = () => {
        const nextId = query < MOCK_DATA.length ? query + 1 : 1;
        navigate(`?id=${nextId}`);
    };

    return (
        <StPokemonDetailContainer onClick={handleClickPokemonCard}>
            <StPokemonCard data-id={query}>
                <StPokemonHeader>
                    <StPokemonNumber>No. {String(pokemonDetail.id).padStart(3, '0')}</StPokemonNumber>
                    <StPokemonName>{pokemonDetail.korean_name}</StPokemonName>
                </StPokemonHeader>
                <StPokemonImg src={pokemonDetail.img_url} />
                <StPokemonType>타입: {pokemonDetail.types?.join(', ')}</StPokemonType>
                <StPokemonDesc>{pokemonDetail.description}</StPokemonDesc>

                {isSelected(pokemonDetail) ? (
                    <StReomveBtn data-type="remove">삭제</StReomveBtn>
                ) : (
                    <StAddBtn data-type="add">등록</StAddBtn>
                )}
            </StPokemonCard>

            <StNavigation>
                <StBtn onClick={handlePrev}>◀</StBtn>
                <StBtn onClick={handleBack}>도감으로 돌아가기</StBtn>
                <StBtn onClick={handleNext}>▶</StBtn>
            </StNavigation>
        </StPokemonDetailContainer>
    );
};

export default PokemonDetail;
