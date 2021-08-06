import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './scss/main.scss';
import Router from './router/Router';
import { routes } from './router/routerConfix';

export const user = {
  authenticated: false,
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Router routes={routes} />
    </BrowserRouter>
  );
};

export default App;
