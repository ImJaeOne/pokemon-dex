import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { ToastContainer } from 'react-toastify';

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
            <ToastContainer autoClose={1000}/>
            <Router />
        </>
    );
}

export default App;
