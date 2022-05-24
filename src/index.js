import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import { fetchQuotes } from './redux/quote';
import store from './redux/configureStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
store.dispatch(fetchQuotes);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
