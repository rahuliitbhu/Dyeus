import React from 'react'
import img1 from '../Images/Vector.png'
import img2 from '../Images/Vector1.png'
import img3 from '../Images/Vectorstart.png'
import img4 from '../Images/Line 7.png'


const Rectangle1 = () => {
  return (
    <div className='container'>
        <div className='rectangle1'>
            <p className='rect1-txt1'>
            About Diana
            </p>
            <p className='rect1-txt2'>
            A platform that looks out for you
            </p>
            <p className='rect1-txt3'>
            Diana empowers you to understand how your body works so you can look and feel your best. 
            </p>
            <img className='line1 ' src={img4} />
            <p className='rect1-txt4'>
            Our Philosophy </p>

            <p className='rect1-txt5'>
            Sustainable wellness is a big-picture, inside out approach
            </p>
            <p className='rect1-txt6'>
            Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 
              
<br/>That’s why we’ve created an integrated ecosystem of: 
{
    <div>
        <img src={img1} />
        <img src={img2} />
    </div>
}
             </p>
            <p className='rect1-txt7'>
            Consciously formulated products that deliver feel-good results fast
            
            
             <br/>
             {
                <img src={img3} />
            }
             <br/>
             
             In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body 
<br/>
            {
              <i className="material-icons large img4" >phone_in_talk</i>
            }
            <br/>

In-app consultation portals that connect you with compassionate wellness experts 
           
            </p>
            <p className='rect1-txt8'>
            Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.

            </p>
            

        </div>
        

    </div>
  )
}

export default Rectangle1