import {useState} from "react";
import './Login.css';
 


function Login (){

/*
const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [Senha, setSenha] = useState("");
  const [senha, setconfirmarsenha] = useState("");
  
  const Usuario  = {
    nome, 
    email  , 
    telefone  ,
    senha,
    confirmarssenha,
  };

  async function CadastrarUsuario(e) {
    e.preventDefault();
   
    await api
      .post("api/v1/user/sign-up", Usuario )
      .then((response) => {
        console.log(response.data);
        window.location.href='/'
      })
      .catch((error) => {
        console.error("Error => ", error);
      });
  }
  */

    return(
        
      <Container>
        <div className="Login">
       <form>
        <div className="form-container">
           <h2> Fazer Login</h2>
           <div className="form2-container">
            
            <input type='text'
             placeholder=" Email ou Numero"></input>
           
            <input type='number'  placeholder=" Data de Nascimento"></input>
            
            <input type='password'  placeholder=" Password"></input>
           
            <input type='text' placeholder=" habilidade"></input>
            <div className="form-buttom">
            <button type="submit">Login</button>
            </div>
           
           </div>


        </div>
       </form>
        </div>

        </Container>

        
        
    );
}

export default Login;