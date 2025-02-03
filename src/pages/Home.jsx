import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import pokemonLogo from '../assets/pokemon-logo-RN0wntMB.png';

const StHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StHomeLogo = styled.img`
    width: 50%;
`;

const StDexBtn = styled.button`
    border: none;
    border-radius: 5px;
    color: white;
    padding: 20px;
    background-color: red;
    cursor: pointer;
`;

const Home = () => {
    const navigate = useNavigate();
    return (
        <StHomeContainer>
            <StHomeLogo src={pokemonLogo} />
            <StDexBtn onClick={() => navigate('/dex')}>포켓몬 도감 시작하기</StDexBtn>
        </StHomeContainer>
    );
};

export default Home;
