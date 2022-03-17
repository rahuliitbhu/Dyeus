import React from 'react'
import Navbar from '../Components/Navbar'
import Contact from './Contact'
import Rectangle1 from './Rectangle1'
import Rectangle2 from './Rectangle2'
import Rectangle3 from './Rectangle3'
import Rectangle4 from './Rectangle4'
import Rectangle5 from './Rectangle5'
import Rectangle6 from './Rectangle6'
import Rectangle7 from './Rectangle7'
import Rectangle8 from './Rectangle8'

const Home = () => {
  return (
    <div className='container'>
        
        <Navbar/>
        <Rectangle1/>
        <Rectangle2/>
        <Rectangle3/>
        <Rectangle4/>
        <Rectangle5/>
        <Rectangle6/>
        <Rectangle7/>
        <Rectangle8/>
        <Contact/>

    </div>
  )
}

export default Home