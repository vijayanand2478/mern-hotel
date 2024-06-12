import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { UseAuthContext } from './Contexts/AuthContext'
import AddHotels from './pages/AddHotels'
import { Toaster } from 'react-hot-toast'
import BookPage from './pages/BookPage'

function App() {
  const [count, setCount] = useState(0)
  const {authName}=UseAuthContext();

  return (
    <>
   
      <BrowserRouter>
        <Routes>
          <Route path='/' element={(authName)?<Home/>:<Login/>}></Route>
          <Route path='/login' element={(authName)?<Home/>:<Login/>}></Route>
          <Route path='/signup' element={(authName)?<Home/>:<Signup/>}></Route>
          <Route path='/add-hotel' element={(authName)?<AddHotels/>:<Login/>}></Route>
          <Route path='/spec-hotel' element={(authName)?<BookPage/>:<Login/>}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster richColor/>
    </>
  )
}

export default App
