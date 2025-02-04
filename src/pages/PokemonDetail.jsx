import { useNavigate, useSearchParams } from 'react-router-dom';
import MOCK_DATA from '../mock-data';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../redux/slices/pokemonSlice';

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
    background-color: ${({ $props }) =>
        $props === 'remove' ? '#FF6B6B' :
        $props === 'add' ? '#6BCB77' :
        '#D9D9D9'};
    color: ${({ $props }) => ($props ? 'white' : 'black')};
`;

const PokemonDetail = () => {
    const [searchParams] = useSearchParams();
    const query = Number(searchParams.get('id'));

    const pokemonDetail = MOCK_DATA.find((item) => item.id === query);

    const myPokemon = useSelector((state) => state.myPokemon);
    const isIncluded = myPokemon.some((pokemon) => pokemon.id === pokemonDetail.id);

    const handleAddBtn = (e, item) => {
        e.stopPropagation();
        if (myPokemon.some((pokemon) => pokemon.id === item.id)) {
            toast.error('이미 등록되어 있는 포켓몬입니다.');
            return;
        }
        if (myPokemon.length >= 6) {
            toast.error('최대 6마리까지 등록할 수 있습니다.');
            return;
        }
        dispatch(addPokemon({ pokemon: item }));
        toast.info(`${item.korean_name} 등록 완료`);
    };

    const handleRemoveBtn = (e, item) => {
        e.stopPropagation();
        dispatch(removePokemon({ id: item.id }));
        toast.info(`${item.korean_name} 삭제 완료`);
    };

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

            {isIncluded ? (
                <StBtn $props={'remove'} onClick={(e) => handleRemoveBtn(e, pokemonDetail)}>
                    삭제
                </StBtn>
            ) : (
                <StBtn $props={'add'} onClick={(e) => handleAddBtn(e, pokemonDetail)}>
                    등록
                </StBtn>
            )}
            <StBtn onClick={handleBack}>뒤로 가기</StBtn>
        </StPokemonDetailContainer>
    );
};

export default PokemonDetail;
