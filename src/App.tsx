import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header';
import { Historie } from './pages/Historie';
import { Home } from './pages/Home';
import { Spenden } from './pages/Pages';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/spenden" element={<Spenden />} />
            <Route path="/historie" element={<Historie />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
