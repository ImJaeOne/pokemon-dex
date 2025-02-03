import styled from 'styled-components';
import pokemonBall from '../assets/pokeball-13iwdk7Y.png';

const StDashboard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const StDashBoardTitle = styled.h1``;

const StDashBoardList = styled.div`
    display: flex;
    gap: 10px;
`;

const StDashBoardImg = styled.img`
    width: 50px;
`;

const Dashboard = () => {
    const pokemonDummyList = Array.from({ length: 6 }, () => {
        return 0;
    });
    return (
        <StDashboard>
            <StDashBoardTitle>나의 포켓몬</StDashBoardTitle>
            <StDashBoardList>
                {pokemonDummyList.map(() => {
                    return <StDashBoardImg src={pokemonBall} />;
                })}
            </StDashBoardList>
        </StDashboard>
    );
};

export default Dashboard;
