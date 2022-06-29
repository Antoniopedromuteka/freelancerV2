import { useEffect, useState, useRef } from "react";
import React from "react"
import './style.css';
import Header from "../../Components/Header/Header.js";
import Foto1 from '../../assets/foto1.jpg'
import Foto2 from '../../assets/blog_single.jpg'
import Foto3 from '../../assets/team-04.png';
import Parceiro1 from '../../assets/logo_02.png'
import Contact from '../../Components/Contacto/index'
import Footer from "../../Components/Footer/index";
 
import { Card } from "../../Components/Card";
 
 // requires a loader
import {ItemsData} from './mockItemsData'
import { Subscribe } from "../../Components/Subscribe";
import { Slides } from "../../Components/Slide";


function Home (){
const [data, setData] = useState([])




const carrossel = useRef(null)

useEffect(()=>{
    fetch('http://localhost:3000/static/data.json')
    .then((response)=>response.json())
    .then(setData);
}, [])

 

if(!data || !data.length) return null;

    
 

    return(
        <>
        <Header/>
        <div className="Banner">
            <div className="sub-Banner">
                <h1 id="Title-site">Bem vindo ao nosso sistema <span id="fr">Free</span>Lancers</h1>
                <p>Encontre os melhores funcionários para sua grande ou pequena empresa</p>
            </div>
        </div>
        <div className="Subtitle-home" id="Sobre">
            <h2>Sobre nós</h2>
            <p>Freelancer, um benefício para todos</p>
        </div>
        <div className="desc-sobr">
            <div>
                <img src={Foto1} alt="Foto sem descricao"></img>
            </div>
            <div>
                <p>O Freelancer são pessoas que prestam serviços de forma individual.
                         é um site onde irá ajudar você que tem uma habilidade  e
                          quer mostrar para o mundo e assim conseguir o seu
                        emprego diário, sem desprimor a ninguém o site precisará apenas de 2 vídeos
                        para comprovar o quão habilidoso és e com isso irás seguir algumas recomendações.
                        Claro! Vai já fazer o login.
                </p>
            </div>
        </div>
        <div className="desc-sobr">
            <div>
                <p>O Freelancer são pessoas que prestam serviços de forma individual.
                         é um site onde irá ajudar você que tem uma habilidade  e
                          quer mostrar para o mundo e assim conseguir o seu
                        emprego diário, sem desprimor a ninguém o site precisará apenas de 2 vídeos
                        para comprovar o quão habilidoso és e com isso irás seguir algumas recomendações.
                        Claro! Vai já fazer o login.</p>
            </div>
            <div>
                <img src={Foto2} alt="Foto sem descricao"></img>
            </div>
        </div> 
        <div className="Subtitle-home" id="Frel">
            <h2>Áreas</h2>
            <p>Freelancer, conheça as nossas áreas</p>
        </div>

        
                <div className="areas-container">
                    
                    {
                    
                        ItemsData.map((item)=>{
                            return ( 
                                    <Card item={item} />       
                            );  
                            
                      
                        })    
                      
                    }
                    
                </div>
      

 
          <Subscribe/>

       <div>

        
    </div>

        <div className="Subtitle-home">
            <h2>Nossos parceiros</h2>
            <p>Freelancer, um benefício para todos</p>
        </div>
        <div className="Parceiros">
            <div>
                <img src="https://th.bing.com/th/id/OIP.vhHZXtLUkvyj9OLebIyrtgAAAA?pid=ImgDet&rs=1" alt="banco bai" />
                <img src="https://th.bing.com/th/id/OIP.0Oz4ZhVjXCR5a5xxtuwroQHaHa?pid=ImgDet&rs=1" alt="taag" />
                <img src="https://customercarecontacts.com/wp-content/uploads/2021/05/wise-logo.jpg" alt="wise"/>
                <img src="https://th.bing.com/th/id/R.bd9ca37ef8a39788313423bf6d78266a?rik=DqQ3c1xMqcQH%2bQ&riu=http%3a%2f%2fwww.oilgasafrica.com%2fsites%2fdefault%2ffiles%2ffield%2fimage%2fsonangol.jpg&ehk=3ULfqDlyfc41H%2fPbtALpXdPWDnpMDckAWmwaQIMSX1I%3d&risl=&pid=ImgRaw&r=0" alt="sonangol"/>
            </div>
        </div> 
       <Contact/>
       <Footer/>
        </>
    );
}
export default Home;
