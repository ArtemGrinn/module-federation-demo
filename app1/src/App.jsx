import React from 'react';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import "./index.css";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Nav/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
      </Routes>
    </div>
  </BrowserRouter>
);


export default App;