import { useEffect, useState, useRef } from "react";
import React from "react"
import './style.css';

function Home (){
    return(
        <div className="container-contacto" id="Contact-id">
            <div className="All-desc-contact">
                <div className="title-contact">
                <h2>Contacta-nos</h2>
            
                </div>
                <div className="div-form-contact">
                <form action="" method="post">
                <div id="inpt-line">
                    <div>
                     <h3>Nome</h3>
                     <input type="text" />
                    </div>
                    <div>
                    <h3>Email</h3>
                    <input type="text" />
                    </div>
                </div>
                <h3>Descrição</h3>
                <textarea id="texAre" ></textarea>
                <button>Enviar</button>
            </form>
                </div>
            </div>
        </div>
    );
}
export default Home;
