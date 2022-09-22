import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Components
import InputForm from './components/InputForm/InputForm'
import InventoryList from './components/InventoryList/InventoryList';
import NavBar from './components/NavBar/NavBar';

// Pages
import AddItem from './pages/AddItem/AddItem';
import Inventory from './pages/Inventory/Inventory';
import Aside from './components/Aside/Aside';

function App() {

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([])

  return (
    <div className='content-wrap'>
    <NavBar />
    <Aside />
      <Routes>
        <Route path='/' element={<Inventory
          items={items} />}/>
        <Route path='/add' element={<AddItem 
          items={items}
          setItems={setItems} 
          categories={categories}
          setCategories={setCategories}/>}/>
      </Routes>
    </div>
  )
}

export default App
