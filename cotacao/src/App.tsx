import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={HomePage}></Route>
      </Routes>
    </div>
  );
}

export default App;
