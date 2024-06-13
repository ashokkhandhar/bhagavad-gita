import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Chapter from './components/Chapter';
import Verse from './components/Verse';

const App = () => (
  <Router>
    <div>
      <Header />
      <main className='bg-zinc-100 p-5 min-h-screen dark:bg-neutral-900'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapter/:i" element={<Chapter />} />
          <Route path="/chapter/:i/verse/:j" element={<Verse />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;