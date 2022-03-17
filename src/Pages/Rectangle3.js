import React from 'react'
import img1 from '../Images/pexels-karolina-grabowska-4041391.png'
const Rectangle3 = () => {
  return (
    <div className='container'>
    <div className='rectangle3'>
        <p className='rect3-txt1'>
        Liberate your everyday wellness 


        </p>
        <p className='rect3-txt2'>
        Shop our self-care products


        </p>
        <p className='rect3-txt3'>
        Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   


        </p>
        <a class="rect3-btn waves-effect waves-light btn">Get a consultation</a>
       
       <p className='rect3-txt5'>
        #NoNasties, we promise!
       

        </p>
        <p>
        {
            <img className='rect3-img1' src={img1}/>
        }
        </p>
        
       
       
        
    </div>
    

</div>
  )
}

export default Rectangle3