import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ToastContainer } from 'react-toastify';
import { PokemonProvider } from './context/PokemonContext';
const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    margin: 0;
  }
  
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <ToastContainer autoClose={1000} />
            <PokemonProvider>
                <Router />
            </PokemonProvider>
        </>
    );
}

export default App;
