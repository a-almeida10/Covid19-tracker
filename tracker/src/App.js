import React from 'react';
import {StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import GlobalStyle from './Commons/styles/globalstyle'
import Main from  './containers/Main'


function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle/>
      <Main />
      <div>

      </div>
    </StylesProvider>
  );
}

export default App;
