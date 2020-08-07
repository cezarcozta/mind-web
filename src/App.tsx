import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

import './global.css'

import { AuthProvider } from './hooks/auth';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;