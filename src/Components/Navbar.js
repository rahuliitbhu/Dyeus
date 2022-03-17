import React from 'react'

const Navbar = () => {
  return (
    
<div>

<nav className='rectangle'>
    <div className="nav-wrapper">
      <a href="#" className="dropdown-trigger brand-logo left black-text" data-target="dropdown1" ><i className="material-icons small" >dehaze</i> </a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a className='black-text' href="sass.html"><i className="material-icons small" >shopping_cart</i></a></li>
        <li><a className='black-text' href="sass.html"><i className="material-icons small" >notifications_none</i></a></li>
        
      </ul>
    </div>
  </nav>
    
</div>


  )
}


export default Navbar