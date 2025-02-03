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

    background-color: #cdcdcd;
`;

const StDashBoardTitle = styled.h1``;

const StDashBoardList = styled.div`
    display: flex;
    gap: 10px;
`;



const Dashboard = () => {
    const pokemonDummyList = Array.from({ length: 6 }, () => {
        return 0;
    });
    return (
        <StDashboard>
            <StDashBoardTitle>나의 포켓몬</StDashBoardTitle>
            <StDashBoardList>
                {pokemonDummyList.map((_, idx) => {
                    return <PokemonCard key={idx}/>;
                })}
            </StDashBoardList>
        </StDashboard>
    );
};

export default Dashboard;
