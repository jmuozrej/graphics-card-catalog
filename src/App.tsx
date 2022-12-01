import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { GraphicsCardListContainer } from './GraphicsCardListContainer ';
import { GraphicsCardDetail } from './GraphicsCardDetail';
import {
  BrowserRouter,
  Link,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Route path='/'>
        <GraphicsCardListContainer graphicCards={INITIAL_STATE}/>
      </Route>
      <Route path='/details/:id'>
        <GraphicsCardDetail />
      </Route>
    </div>
    </BrowserRouter>
  );
}

export default App;
