import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import pokemonLogo from '../assets/pokemon-logo-RN0wntMB.png';

const StHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100dvh;
`;

const StHomeLogo = styled.img`
    width: 50%;
`;

const StDexBtn = styled(Link)`
    border: none;
    border-radius: 5px;
    color: white;
    padding: 20px;
    background-color: red;
    cursor: pointer;
    text-decoration: none;
`;

const Home = () => {
    const navigate = useNavigate();
    return (
        <StHomeContainer>
            <StHomeLogo src={pokemonLogo} />
            <StDexBtn to="/dex">포켓몬 도감 시작하기</StDexBtn>
        </StHomeContainer>
    );
};

export default Home;
