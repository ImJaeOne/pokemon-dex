import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    margin: 0;
  }
  
`;

function App() {
    const myPokemon = useSelector((state) => state.myPokemon);

    useEffect(() => {
        localStorage.setItem('pokemon', JSON.stringify(myPokemon));
    }, [myPokemon]);

    return (
        <>
            <GlobalStyle />
            <ToastContainer autoClose={1000} />
            <Router />
        </>
    );
}

export default App;
