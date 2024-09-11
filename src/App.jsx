

import React from 'react'
import './App.css'

import Firstprop from './props/Firstprop'
import Secondprop from './props/Secondprop'
import Thirdprop from './props/Thirdprop'
import Fourthprop from './props/Fourthprop'
 const sample={
  name:"meggu",
  city:"rellivalasa",
  street:"ysr colony"

 }


function App() {
  return (
    <div className ="x">
     <h1 className='h1'>javascript xml</h1>
     <ul className='w'>
      <li>dhamu</li>
      <li>avi</li>
      <li>meggu</li>
      <li>the coder</li>
     </ul>
     <form>
      <label className='e'>student name</label>
      <input type="text"></input>
       <img src='https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg' />
       <img src='photos/pan.jpeg'alt='photo'/>
       <Firstprop name={sample.street}/>
       <Secondprop name="avi" />
       <Thirdprop name="ali" />
       <Fourthprop name={sample.name}/>
     </form>
     
    </div>
  )
}

export default App
