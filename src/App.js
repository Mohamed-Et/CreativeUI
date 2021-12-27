import React from 'react';
import './App.scss';
import {
  Footer,
  Blog,
  Possibility,
  Features,
  About,
  Header,
  Cta,
  Brand,
  Navbar,
} from './components';
function App() {
  return (
    <div className='App'>
      <div className='all-container'>
        <Navbar />
        <Header />
        <Brand />
        <About />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
