import Router from './shared/Router';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

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
            <Router />
        </>
    );
}

export default App;
