import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products';
import CategorySection from './components/CategorySection';


function App() {
  return (
    <>
     <div className="App">
       <NavBar />
       <Home />
       <Products />
       <CategorySection />
     </div>
    </>
  );
}

export default App;
