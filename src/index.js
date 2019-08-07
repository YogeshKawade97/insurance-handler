import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { loginSuccess } from './actions/authActions';
import { fetchPolicies } from './actions/policyActions';
import { fetchClaims } from './actions/claimActions';
import { fetchAccounts } from './actions/accountActions';

const token = localStorage.getItem('token');

const store = configureStore();
if (token) {
  store.dispatch(loginSuccess(token));
  store.dispatch(fetchPolicies());
  store.dispatch(fetchAccounts());
  store.dispatch(fetchClaims());
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
