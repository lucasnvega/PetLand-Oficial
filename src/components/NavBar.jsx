 import React from 'react'
 import "../Styles/main.css"
 import logo_petshop2 from '../images/logo_petshop2.jpeg' 
 
 function NavBar() {
   return (
     <header>
        <div> <img className="img-logo" src={logo_petshop2} alt="logo" /> </div>
        <div>
          
        </div>
        
        <nav>
            <a href="#">HOME</a>
            <a href="#">Mascotas</a>
            <a href="#">Ofertas</a>
            <a href="#">Carrito</a>
        </nav>
     </header>
   )
 }
 
 export default NavBar