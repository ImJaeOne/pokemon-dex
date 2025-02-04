import styled from 'styled-components';
import PokemonCard from './PokemonCard';
import pokemonLogo from'../assets/pokemon-logo-RN0wntMB.png'
import { useSelector } from 'react-redux';

const StDashboard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px;
    background-color: #5268b0;
`;

const StDashBoardTitle = styled.img`
    width: 200px;
    margin-bottom: 20px;
`;

const StDashBoardList = styled.div`
    display: flex;
    gap: 10px;
`;

const fixedPokemonList = Array.from({ length: 6 }, () => ({}));

const Dashboard = () => {
    const myPokemon = useSelector((state) => state.myPokemon);
    return (
        <StDashboard>
            <StDashBoardTitle src={pokemonLogo}/>
            <StDashBoardList>
                {fixedPokemonList.map((_, idx) => {
                    const item = myPokemon && myPokemon[idx] || {};
                    return <PokemonCard key={`dex${idx}`} item={item} />;
                })}
            </StDashBoardList>
        </StDashboard>
    );
};

export default Dashboard;
