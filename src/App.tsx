import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Floating } from './components/Floating';
import { Image } from './components/Image';
import Home from './pages/Home';
import { Item } from './pages/Item';

const src =
  'https://images.unsplash.com/photo-1649516702655-e4ea2a1ea09c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU1fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';
function App() {
  const [attrs, setAttrs] = useState({});

  return (
    <>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-gray-700 text-center">
          Hello world!
        </h1>
        <Routes>
          <Route
            path="/"
            element={<Home src={src} setAttrs={setAttrs} />}
          ></Route>
          <Route
            path="/:id"
            element={<Item src={src} setAttrs={setAttrs} />}
          ></Route>
        </Routes>
      </div>
      <Floating attrs={attrs}>
        <Image src={src} />
      </Floating>
    </>
  );
}

export default App;
