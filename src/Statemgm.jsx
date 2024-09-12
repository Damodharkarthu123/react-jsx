

import React from 'react'
import {useState, useEffect} from 'react'

const Statemgm = () => {

    const [city, setcity] =useState ("Hyderabad");
    useEffect(()=>{
        if(city === "Hyderabad"){
            setcity("Bangalore")
        } else{
            setcity("Delhi")
        }

    },[city])

   
    
  return (
    <div>
      <h1> i live in{city}</h1>
    </div>
  )
}

export default Statemgm
