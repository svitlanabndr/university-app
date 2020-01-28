import React from 'react';
import './styles/App.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/history';
import Routing from './containers/Routing';

const App: React.FC = () => {
  return (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Routing />
        </ConnectedRouter>
    </Provider>
  );
};

export default App;
