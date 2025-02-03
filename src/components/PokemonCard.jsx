import styled from 'styled-components';
import pokemonBall from '../assets/pokeball-13iwdk7Y.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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

const PokemonCard = ({ item = {}, myPokemon, setMyPokemon }) => {
    const navigate = useNavigate();

    const handelGoDetail = () => {
        if (Object.keys(item).length === 0) {
            return;
        }
        navigate(`/pokemon-detail?id=${item.id}`);
    };

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
            // // 얘도 2번 출력... 왜...?
            // if (prev.some((item) => item.id === id)) {
            //     alert('이미 등록되어 있는 포켓몬입니다.');
            //     return prev;
            // }
            // // 제일 처음 7개째 등록하려 하면 alert 2번 출력
            // if (prev.length >= 6) {
            //     alert('최대 6마리까지 등록할 수 있습니다.');
            //     return prev;
            // }
            return [...prev, { ...item, isRegistered: true }];
        });
        toast.info(`${item.korean_name} 등록 완료`);
    };

    const removePokemon = (e, id) => {
        e.stopPropagation();
        setMyPokemon((prev) => [...prev].filter((item) => item.id !== id));
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
                        <StPokemonBtn onClick={(e) => removePokemon(e, item.id)}>삭제</StPokemonBtn>
                    ) : (
                        <StPokemonBtn onClick={(e) => addPokemon(e, item.id)}>등록</StPokemonBtn>
                    )}
                </>
            )}
        </StPokemonCard>
    );
};

export default PokemonCard;
