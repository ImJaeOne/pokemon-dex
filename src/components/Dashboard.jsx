import styled from 'styled-components';
import PokemonCard from './PokemonCard';

const StDashboard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 20px;
    background-color: #cdcdcd;
`;

const StDashBoardTitle = styled.h1`
    font-size: 40px;
    margin-bottom: 10px;
    font-weight: bolder;
`;

const StDashBoardList = styled.div`
    display: flex;
    gap: 10px;
`;

const fixedPokemonList = Array.from({ length: 6 }, () => ({}));

const Dashboard = ({ myPokemon,setMyPokemon }) => {
    return (
        <StDashboard>
            <StDashBoardTitle>나의 포켓몬</StDashBoardTitle>
            <StDashBoardList>
                {fixedPokemonList.map((_, idx) => {
                    const item = myPokemon[idx] || {};
                    return <PokemonCard key={`dex${idx}`} item={item} setMyPokemon={setMyPokemon}/>;
                })}
            </StDashBoardList>
        </StDashboard>
    );
};

export default Dashboard;
