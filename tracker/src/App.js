import React from 'react';
import {StylesProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core/index'
import GlobalStyle from './Commons/styles/globalstyle'
import Main from  './containers/Main'


function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyle/>
      <Main />
      <div>
        Say hello to my tracker!

      </div>
    </StylesProvider>
  );
}

export default App;
