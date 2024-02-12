import './App.css';
import React from 'react';
import Header from './components/Header/Header.tsx';
import MainContent from './components/MainContent/MainContent.tsx';
import Footer from './components/Footer/Footer.tsx';

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
