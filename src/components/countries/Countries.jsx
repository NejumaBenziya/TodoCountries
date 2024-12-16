import React,{useEffect, useState} from "react";
import Cards from '../cards/Cards'
import axios from 'axios'
import FtnNavbar from "../FtnNavbar";
import FtnFooter from "../FtnFooter";
function Countries() {
    const [all,setAll]=useState([])
    useEffect(()=>{
        getData()
    })
    const getData=()=>{
        
        axios('https://restcountries.com/v3.1/all')
        .then((res)=>{
setAll(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
  return (
    
    <div className="d-flex flex-wrap gap-3 justify-content-center" >
        <FtnNavbar/>
        <button onClick={getData}>Get countries Data</button>
        {
            all.map((cntry)=><Cards data={cntry} key={cntry.cca3}/>)
        }
       
<FtnFooter/>
    </div>
  )
}

export default Countries