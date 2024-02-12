import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
        <Header />
        <MainContent />
        <Footer />
    </div>
  );
}

export default App;
