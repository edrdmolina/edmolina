// Libraries
import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Photography from './Pages/Photography';

function App() {
    return (
      <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/photography' element={ <Photography /> } /> 
      </Routes>
    );
}

export default App;
