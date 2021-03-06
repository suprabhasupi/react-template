import React from 'react';
// import ReactDOM from 'react-dom';
import './index.scss';
import { render } from 'react-dom';
import App from './app/App';
import  {BrowserRouter} from 'react-router-dom';
// import Homepage from './pages/home';
import * as serviceWorker from './serviceWorker';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

// ReactDOM.render(<Homepage />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
