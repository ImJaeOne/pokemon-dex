import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>Home</div>
            <Link to="/dex">포켓몬 도감 시작하기</Link>
        </>
    );
};

export default Home;
