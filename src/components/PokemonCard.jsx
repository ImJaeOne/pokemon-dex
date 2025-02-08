import styled from 'styled-components';
import pokemonBall from '../assets/pokeball-13iwdk7Y.png';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../redux/slices/pokemonSlice';
import { memo } from 'react';

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

const StPokemonBtn = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== 'action-type', // action-type을 DOM에 전달하지 않도록 필터링
})`
    border-radius: 10px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    color: white;
`;

const StAddBtn = styled(StPokemonBtn)`
    background-color: #6bcb77;
`;

const StReomveBtn = styled(StPokemonBtn)`
    background-color: #ff6b6b;
`;

const PokemonCard = ({ item = {}, isSelected }) => {
    return (
        <StPokemonCard data-id={item.id}>
            {Object.keys(item)?.length === 0 ? (
                <StDashBoardImg src={pokemonBall} />
            ) : (
                <>
                    <StPokemonImg src={item.img_url} />
                    <StPokemonName>{item.korean_name}</StPokemonName>
                    <StPokemonId>No. {String(item.id).padStart(3, '0')}</StPokemonId>
                    {isSelected ? (
                        <StReomveBtn data-type="remove">삭제</StReomveBtn>
                    ) : (
                        <StAddBtn data-type="add">등록</StAddBtn>
                    )}
                </>
            )}
        </StPokemonCard>
    );
};

export default memo(PokemonCard);
