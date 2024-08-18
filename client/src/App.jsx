import React from 'react'
import {BrowserRouter , Router , Route , Routes} from "react-router-dom"
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Projects from './pages/Projects'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/signin' element={<Signin/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/project' element={<Projects/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
