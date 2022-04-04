import './App.css';
import React, { Component } from 'react'
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Casual from './components/casual/casual';
import Formal from './components/formal/formal';
import Newindata from './components/new-in/newin';
import { Routes,Route } from 'react-router-dom';
import Prints from './components/prints/print';
import Shawls from "./components/shawls/shawl"

export default class App extends Component {

  render() {
    return (
      <div className="App">

      <Header/>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}></Route>
      
      <Route path='/casuals' element={<Casual/>}></Route>
      <Route path='/formals' element={<Formal/>}></Route>
      <Route path='/new' element={<Newindata/>}></Route>
      <Route path='/prints' element={<Prints/>}></Route>
      <Route path='/shawls' element={<Shawls/>}></Route>

      </Routes>

      <Footer/>

    </div>
    )
  }
}



