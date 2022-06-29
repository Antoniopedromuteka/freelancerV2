

import React from 'react'
import Header from '../Header/Header'

import foto1 from './foto1.jpg';
 

import * as S from './style';
const Empresas = () => {
  return (
    <>
    <Header/>

    <S.Container>

        <S.Top>
             <S.Title>Empresas</S.Title>

             <S.Subtitle>Empresas que temos na nossa plataforma</S.Subtitle>   
        </S.Top>

        <S.ContainerCards>
           <S.Card>

            <S.CardImage>
                <img src={foto1} alt="imagem"/>
            </S.CardImage>
            <S.CardTitle>Ensa</S.CardTitle>
            <S.CardDescription>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            </S.CardDescription>
            </S.Card> 
           <S.Card>
             <S.CardImage> 
             <img src={foto1} alt="imagem"/>
             </S.CardImage>
             <S.CardTitle>Ensa</S.CardTitle>


             <S.CardDescription>
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            </S.CardDescription>

            </S.Card> 
           <S.Card>
                <S.CardImage> 
                <img src={foto1} alt="imagem"/>
                 </S.CardImage>
                <S.CardTitle>Ensa</S.CardTitle>
                <S.CardDescription>
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
                    Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor
            </S.CardDescription>
           </S.Card>
        </S.ContainerCards>


    </S.Container>


    
    </>
  )
}

export default Empresas;