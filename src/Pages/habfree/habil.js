import React from "react";
import './habilid.css'

import styled from 'styled-components';
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";


const Container = styled.section`

  width:100%;
  height:100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  
`;


function habfree() {
    return (

        <>
        <Header/>
        <Container>

        <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form>
                        <label for="chk" aria-hidden="true">Sign up</label>
                        <input type="text" name="txt" placeholder="User name" required=""/>
                            <input type="email" name="email" placeholder="Email" required=""/>
                                <input type="password" name="pswd" placeholder="Password" required=""/>
                                <input type="Confirmar password" name="pswd" placeholder="Confirmar Password" required=""/>
                                <input type="date" name="pswd" placeholder="data nascimento" required=""/>
                                    <button>Sign up</button>
                                    <Link to="##" className="m">Esqueceu a sua passe?"</Link>  
                                </form>
                            </div>
                            <div class="login">
                                <form>
                                    <label for="chk" aria-hidden="true">Login</label>
                                    <input type="email" name="email" placeholder="Email / numero" required=""/>
                                        <input type="password" name="pswd" placeholder="Password" required=""/>
                                        <input type="Confirmar password" name="pswd" placeholder="Confirmar Password" required=""/>
                                            <button>Login</button>
                                            <Link to="##">Esqueceu a sua passe?"</Link>
                                        </form>
                                    </div>
                            </div>
                            </Container>
                           </> 

                            )
}


export default habfree 