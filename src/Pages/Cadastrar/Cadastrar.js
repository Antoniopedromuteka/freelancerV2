import React from "react";
import "./cadastrar.css"; 
import Header from "../../Components/Header/Header";
import {Link} from 'react-router-dom';
import Gueth from '../../assets/central.jpg'
 






function Cadastrar(){
    return(
        <div className="cadastrar-container">
         <form>
         <div className="form-container">
           <h2> Fazer cadastro</h2>
           <div className="form2-container">
                
            <input type='text' 
             placeholder=" Email ou Numero"></input>
           
            <input type='number'  placeholder=" Data de Nascimento"></input>
            
            <input type='password'  placeholder=" Password"></input>
            <input type='confirmar password'  placeholder=" confirmar Password"></input>
           
            <div className="form-buttom">
                <Link to="/loginfree">
            <button type="submit" >cadastro</button>

            </Link>
            </div>
           

         </div>
         </div>
       </form> 
       </div>    
        
    );
}

export default Cadastrar;