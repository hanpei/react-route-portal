import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { FloatingWithImage } from './components/Image';
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
      <FloatingWithImage />
    </>
  );
}

export default App;
