import react from "react";
import './style.css'
 
import { BsInstagram, BsFacebook, BsWhatsapp, BsTwitter} from 'react-icons/bs';

function Footer(){
return(
    <>
    <div className="Container-footer">
        <div>
            <section>
                <h2 className="title-footer sup">FreeLancers</h2>
              
            </section>
            <section>
                <h2 className="title-footer">Nossos Parceiros</h2>
                <ul>
                    <li>Ensa</li>
                    <li>BAI</li>
                    <li>Wise</li>
                    <li>Sonangol</li>
                    <li>Unicef</li>
                </ul>
            </section>
            <section>
            <h2 className="title-footer">Serviços</h2>
                <ul>
                    <li>Encontrar freeLancers</li>
                    <li>Encontrar freeLancers</li> 
                    <li>Encontrar freeLancers</li>
                    <li>Encontrar freeLancers</li>
                    <li>Encontrar freeLancers</li>
                </ul>
            </section>
            <section>
            <h2 className="title-footer">Sobre o sistema</h2>
                <ul>
                <li>Sistema de freeLancers</li>
                <li>Sistema de freeLancers</li>
                <li>Sistema de freeLancers</li>
                <li>Sistema de freeLancers</li>
                <li>Sistema de freeLancers</li>


                </ul>
            </section>
        </div>
        <section id="foot">
            <h3 className="title-footer">Siga-nos nas redes sociais como:</h3>
            <div className="div-icons">
                <BsInstagram className="icons"/>
                <BsFacebook className="icons"/>
                <BsWhatsapp className="icons"/>
                <BsTwitter className="icons"/>
            </div>
        </section>
    </div>
    </>
)
}
export default Footer;