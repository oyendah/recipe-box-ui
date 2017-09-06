/* eslint-disable global-require */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';
import Root from './containers/Root';
import './styles/styles.scss';
import './styles/normalize.css';
import './styles/skeleton.css';
import '../node_modules/toastr/build/toastr.min.css';


const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const newConfigureStore = require('./store/configureStore');
    const newStore = newConfigureStore.configureStore();
    const newHistory = newConfigureStore.history;
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NewRoot store={newStore} history={newHistory} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
