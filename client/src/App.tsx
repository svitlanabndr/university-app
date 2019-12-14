import React from 'react';
import './styles/App.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/history';
import Routing from './containers/Routing';
import { I18nextProvider } from 'react-i18next';
import { createMuiTheme } from '@material-ui/core/styles';

import i18n from './i18n';
import { MuiThemeProvider } from '@material-ui/core';

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00164d',
    },
  }
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={muiTheme}>
            <Routing />
          </MuiThemeProvider>
        </ConnectedRouter>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
