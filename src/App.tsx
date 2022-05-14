import React from 'react';
import './App.scss';
import Header from './components/layout/header/Header';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>


      {/* <Home /> */}
    </div>
  );
}

export default App;
