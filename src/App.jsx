import { useState } from 'react'
import './App.css'
import { Country } from './Components/Country'
import { Route, Routes } from 'react-router-dom'
import { CountryCard } from './Components/CountryCard'
import { NavBar } from './Components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Country />} />
        <Route path='/country/:code' element={<CountryCard />} />
      </Routes>
    </>
  )
}

export default App
