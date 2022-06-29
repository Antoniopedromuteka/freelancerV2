

import React from 'react';
import './style.css';

import * as S from './style';

import * as I from "react-icons/bs";
 


 
 



const UserProfile = () => {


 


  return (
    <>
   
    <S.Container>
      
      <S.Card>
        


        
      
       <S.section> 
        <S.SectionLeft>

          <S.UserPicture/>

          <S.Rate>
          <S.StarIcon/>
          <S.StarIcon/>
          <S.StarIcon/>
          <S.StarIcon/>
          <S.StarIcon/>

          </S.Rate>

        <S.ExtrasInfo>
          <S.Extras>Criativa, efeciencia, e comunicativa</S.Extras>
          <S.Extras>Luanda / Angola</S.Extras>
        <S.Extras>Tel : +244 993356514</S.Extras>
       
      
        <S.SocialIcons>

        <I.BsFacebook className='icons'/>
        <I.BsWhatsapp className='icons'/>
        <I.BsGithub className='icons'/>
        <I.BsLinkedin className='icons'/>
         
        </S.SocialIcons>


        <S.Contactar>Contactar</S.Contactar>

       


        </S.ExtrasInfo>

        </S.SectionLeft>
        <S.SectionRight>

        <S.ContentTop> 

          <S.UserName>Gueth Almeida</S.UserName>
          <S.RightInfo>
        
            <S.Label>Taxa horária:</S.Label>
            <S.ValueInfo>AOA 1000.00</S.ValueInfo>
          </S.RightInfo>  
        </S.ContentTop>
    


        

        <S.Description>

          Software Enginner- Font end & Design UI/UX

        </S.Description>
        
        <S.Title>
          Habilidades
        </S.Title>

        <S.Resolve>
       

        <S.Skill>Javacript</S.Skill>
        <S.Skill>HTML</S.Skill>
        <S.Skill>Css</S.Skill>
        <S.Skill>React js</S.Skill>
        <S.Skill>Next jS</S.Skill>
        <S.Skill>Node JS</S.Skill>

        </S.Resolve>

        <S.Title>
          Sobre
        </S.Title>
        <S.SectionBottom></S.SectionBottom>


        </S.SectionRight>
        </S.section>
      </S.Card>
    

    </S.Container>
      
    </>
  )
}

export default UserProfile;
