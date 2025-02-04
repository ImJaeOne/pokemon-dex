import styled from 'styled-components';
import pokemonBall from '../assets/pokeball-13iwdk7Y.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../redux/slices/pokemonSlice';

const StPokemonCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 120px;
    height: 218px;
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
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const myPokemon = useSelector((state) => state.myPokemon);

    const handelGoDetail = () => {
        if (Object.keys(item).length === 0) {
            return;
        }
        navigate(`/pokemon-detail?id=${item.id}`);
    };
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

    return (
        <StPokemonCard onClick={handelGoDetail}>
            {Object.keys(item)?.length === 0 ? (
                <StDashBoardImg src={pokemonBall} />
            ) : (
                <>
                    <StPokemonImg src={item.img_url} />
                    <StPokemonName>{item.korean_name}</StPokemonName>
                    <StPokemonId>No. {String(item.id).padStart(3, '0')}</StPokemonId>
                    {item?.isRegistered ? (
                        <StPokemonBtn onClick={(e) => handleRemoveBtn(e, item)}>삭제</StPokemonBtn>
                    ) : (
                        <StPokemonBtn onClick={(e) => handleAddBtn(e, item)}>등록</StPokemonBtn>
                    )}
                </>
            )}
        </StPokemonCard>
    );
};

export default PokemonCard;
