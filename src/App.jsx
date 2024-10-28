import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import Auth from './pages/Auth'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home isHome={true}/>}/>
        <Route path='/Dashboard' element={<DashBoard/>}/>
        <Route path='/Login' element={<Auth/>}/>
        <Route path='/Register' element={<Auth insideRegister={true}/>}/>
      </Routes>
    </>
  )
}

export default App
