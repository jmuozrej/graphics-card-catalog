import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GraphicsCardListContainer } from './components/GraphicsCardListContainer';
import { GraphicsCardDetail } from './components/GraphicsCardDetail';
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<GraphicsCardListContainer />} />
        <Route path='/details:id' element={<GraphicsCardDetail />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
