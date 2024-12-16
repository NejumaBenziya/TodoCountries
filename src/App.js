import React,{useEffect, useState} from "react";
import './App.css';
import Countries from './components/countries/Countries';
import Todo from './components/Todo';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import NotFound from "./components/notfound/NotFound";
import Home from "./components/home/Home";

function App() {
  const [show,setShow]=useState(true)
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Todo' element={<Todo/>}></Route>
    <Route path='/Countries' element={<Countries/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
   </Routes>
   </BrowserRouter>
     
  );
}

export default App;
