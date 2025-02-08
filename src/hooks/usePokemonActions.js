import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../redux/slices/pokemonSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import MOCK_DATA from '../mock-data';

const usePokemonActions = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myPokemon = useSelector((state) => state.myPokemon);

    const handleClickPokemonCard = (e) => {
        const itemId = e.target.closest('[data-id]')?.getAttribute('data-id');
        const item = MOCK_DATA.find((pokemon) => pokemon.id === Number(itemId));

        if (!item) return;

        const actionType = e.target.getAttribute('data-type');

        if (actionType === 'add') {
            if (myPokemon.length >= 6) {
                toast.error('최대 6마리까지 등록할 수 있습니다.');
                return;
            }
            dispatch(addPokemon({ pokemon: item }));
            toast.info(`${item.korean_name} 등록 완료`);
        } else if (actionType === 'remove') {
            dispatch(removePokemon({ id: item.id }));
            toast.info(`${item.korean_name} 삭제 완료`);
        } else {
            navigate(`/pokemon-detail?id=${item.id}`);
        }
    };

    const isSelected = (item) => myPokemon.some((pokemon) => pokemon.id === item.id);

    return { myPokemon, handleClickPokemonCard, isSelected };
};

export default usePokemonActions;
