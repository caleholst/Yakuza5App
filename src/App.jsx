import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Kiryu from './kiryu/kiryu';
import Saejima from './saejima/saejima';
import Haruka from './haruka/haruka';
import Akiyama from './akiyama/akiyama';
import Shinada from './shinada/shinada';
import Home from './home/home';
import Navbar from './functions/Navbar'

function App() {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/kiryu" element={<Kiryu />} />
              <Route path="/saejima" element={<Saejima />} />
              <Route path="/haruka" element={<Haruka />} />
              <Route path="/akiyama" element={<Akiyama />} />
              <Route path="/shinada" element={<Shinada />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
