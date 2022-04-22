import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { FloatingContainer } from '.';
import './App.css';
import Home from './pages/Home';
import { Item } from './pages/Item';

function App() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-700 text-center">
          Hello world!
        </h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/item" element={<Item />}></Route>
        </Routes>
      </div>
      <FloatingContainer />
    </>
  );
}

export default App;
