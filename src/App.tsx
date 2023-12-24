import React from 'react';
import './App.css';

import { Route, Routes } from "react-router-dom";
import { Button } from './components';
import { getRoutes } from '@routes'

function App() {


  return (
    <Routes>
      <Route path="/"
        element={<>
          <div style={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>{'React Base App'}</div>
        </>} />
      <Route path={"*"} element={<h1>Page Not found</h1>} />
    </Routes>
  );
}

export default App;
