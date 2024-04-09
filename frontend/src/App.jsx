import React from 'react'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Second from './components/Second';
import Popular from './components/Popular';
import Products from './components/Products';
import Deals from './components/Deals';
import Info from './components/Info';
import Discount from './components/Discount';
import Features from './components/Features';
import Latest from './components/Latest';


function App() {
  return (
    <>
    <div className='container mx-auto '>
    <Navbar/>
    <Banner/>
    <Second/>
    <Popular/>
    <Products/>
    <Info/>
    <Deals/>
    <Discount/>
    <Features/>
    <Latest/>
    

    </div>
    </>
  )
}

export default App