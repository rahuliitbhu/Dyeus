import React from 'react'
import img1 from '../Images/Rectangle 193.png'
import img2 from '../Images/Rectangle 194.png'
import img3 from '../Images/Rectangle 197.png'
import img4 from '../Images/Rectangle 198.png'
const Rectangle4 = () => {
  return (
    <div className='container'>
    <div className='rectangle4'>
        <p className='rect4-txt1'>
        Track your mood
  </p>
        <p className='rect4-txt2'>
        All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. 

        </p>
        <a class="rect4-btn waves-effect waves-light btn">Get a consultation</a>
        <>
        <img className='rect4-img1' style={{bottom:'10px'}} src={img1}/>
        <img className='rect4-img1'  src={img2}/>
        <img className='rect4-img1' style={{left:'200px'}} src={img3}/>
        <img className='rect4-img1' style={{bottom:'10px',left:'200px'}} src={img4}/>
        </>
        
       
       
        
    </div>
    

</div>
  )
}

export default Rectangle4