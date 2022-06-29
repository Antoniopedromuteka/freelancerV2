
import styled from 'styled-components';





export const Container = styled.section`

    width: 100%;

    height: 100vh;

    margin-top: 60px;
    

`


export const Top = styled.section`

    width: 100%;

    height: 15rem;
 

    display: flex;

    flex-direction: column;
    justify-content:center;

`;


export const Title = styled.h2`


    color: black;
    
    text-align: center;

    font-size: 2rem;
    font-weight: 400;



`


export const Subtitle = styled.h4`

    color: gray;

    font-weight: 200;

    text-align: center;

    margin-top: 10px;

`

export const ContainerCards = styled.section`

    width: 100%;



    display: flex;
    align-items: center;
    justify-content:space-around;
    margin-top: -3rem;

    height: max-content;

    padding: 2rem;

    gap: 0.1rem;

    flex-wrap: wrap;

 
`;



export const Card = styled.section`

    width: 25rem;
    height: 30rem;

    border-radius: 0.2rem;
   
    margin-top: 1rem;
`;



export const CardImage = styled.section`

    width: 100%;
    
    height: 15rem;

    border-radius: 0.2rem;
  


    img{
        width: 100%;
        height: 15rem;
        border-radius: 0.5rem;
    }


`


export const CardTitle = styled.h3`

    color: #003;

    font-weight: 300;
    
    font-size: 1.5rem;

    margin-left: 1rem;
    margin-top: 1rem;


`;


export const CardDescription = styled.p`

    color: #003;
    font-weight: 200;

    opacity: 0.6;
    font-size: 1rem;

    margin-top: 1rem;

    margin-left: 1rem;
    margin-right: 0.5rem;
    text-align: justify;


`;

    
