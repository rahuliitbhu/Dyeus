import React from 'react'
import img1 from '../Images/facebook.png'
import img2 from '../Images/twitter.png'

const Contact = () => {
  return (
    <div className='container'>
    <div className='contact'>
        
        
    <img className='contact-img1'style={{right:"85px",top:"55px"}} src={img1}/>
    <img className='contact-img1' style={{right:"45px",top:"55px"}} src={img2}/>
    {
/*
<ul className="collection">
        
        <li  ><div className='collection-item' >Product <i class="material-icons">keyboard_arrow_right</i></div></li>
        <li  ><div className='collection-item' >Our Science <i class="material-icons">keyboard_arrow_right</i></div></li>
        <li  ><div className='collection-item'>Vision {`&`} Mission <i class="material-icons">keyboard_arrow_right</i></div></li>
        <li  ><div className='collection-item'>About Us <i class="material-icons">keyboard_arrow_right</i></div></li>
        
      </ul>
*/
    }

    
<ul class="collection " style={{top:"90px" ,border:"0px"}} >
        
<li  ><div className='collection-item black white-text' >Product <i class="material-icons">keyboard_arrow_right</i></div></li>
        <li  ><div className='collection-item black white-text' >Our Science <i class="material-icons">keyboard_arrow_right</i></div></li>
        <li  ><div className='collection-item black white-text'>Vision {`&`} Mission <i class="material-icons">keyboard_arrow_right</i></div></li>
        <li  ><div className='collection-item black white-text'>About Us <i class="material-icons">keyboard_arrow_right</i></div></li>
        
      </ul>
            


    
     
      <p className='contact-txt ' >
      Subscribe to our Newsletter
      </p>
    
      <div className='row'>
      <div className="col-8 input input-field input-outlined">
       
       <input className='input input-field'  placeholder="Enter your email..."  type="text" class="validate"/>
      </div>
      <div className='col-4'>


<button  className=' btn-contact  btn-small black-text'>
    {
<>
<i class="material-icons left black-text" >mail_outline</i>
<p className='p'>Activate

</p>
</>




    }
    </button>

      </div>
      </div>
      

        
    </div>
    

</div>
  )
}

export default Contact