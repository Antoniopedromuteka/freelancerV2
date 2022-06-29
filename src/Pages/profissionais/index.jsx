import { Link } from 'react-router-dom';
import Header from '../../Components/Header/Header';

import foto1 from './foto1.jpg';


import * as S from './style';

 

export function Profissionais(){
  return(
   <>

   <Header/>
   <S.Container>

<S.Top>
     <S.Title>Profissionais</S.Title>

     <S.Subtitle>Profissionais que temos na nossa plataforma</S.Subtitle>   
</S.Top>

<S.ContainerCards>
   <S.Card>

    <S.CardImage>
        <img src={foto1} alt="imagem"/>
    </S.CardImage>
    <S.CardBody>

    <Link className="link" to="/Userprofile">
      <S.CardBodyTiled>Nome Completo</S.CardBodyTiled>

      <S.CardBodySubtitle>Area de trabalho</S.CardBodySubtitle>
    </Link>  

    </S.CardBody>
 
   
    </S.Card> 
   <S.Card>
     <S.CardImage> 
     <img src={foto1} alt="imagem"/>
     </S.CardImage>
     <S.CardBody>
     <Link className="link" to="/Userprofile">
      <S.CardBodyTiled>Nome Completo</S.CardBodyTiled>

      <S.CardBodySubtitle>Area de trabalho</S.CardBodySubtitle>
    </Link>  
    
    </S.CardBody>

    </S.Card> 
   <S.Card>
        <S.CardImage> 
        <img src={foto1} alt="imagem"/>
         </S.CardImage>
  
         <S.CardBody>

         <Link className='link' to="/Userprofile">
      <S.CardBodyTiled>Nome Completo</S.CardBodyTiled>

      <S.CardBodySubtitle>Area de trabalho</S.CardBodySubtitle>
    </Link>  
</S.CardBody>

   </S.Card>
</S.ContainerCards>


</S.Container>






  </>
  );
}
 