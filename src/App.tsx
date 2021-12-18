import {ThemeProvider} from "styled-components";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Router from "./routes";
import {theme} from "./styles/theme";
import GlobalStyle from "./styles/globalStyles";

function App(){
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <ToastContainer limit={1}/>
        <Router/>
      </ThemeProvider>
  );
}

export default App;