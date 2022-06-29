import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';

function Header (){

 
    return(
        <div>
            <header>
                <h2><a> Freelancer</a></h2>
            
                <nav className="nav-container">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#Sobre">Sobre</a></li>
                        <li><a href="#">Post</a></li>

                        <li><a href="#Frel">Profissionais</a></li>
                    </ul>
                    <div className="butoom">
                     <Link to='/login'> <button> Login</button></Link>
                     <Link to='/cadastrar'> <button>Cadastrar</button></Link>
                     
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;