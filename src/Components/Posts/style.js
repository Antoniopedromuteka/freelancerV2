
import styled  from "styled-components";



 


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

    width: 60rem;
    height: 44rem;

    border-radius: 0.1rem;
    
 
   
    margin-top: 1rem;
    position: relative;

    border: 1px solid #ddd;
    padding:1rem;

    .link{
        text-decoration: none;
    }
`;



export const CardImage = styled.section`

    width: 100%;
    
    height: 33rem;

    border-radius: 0.2rem;
 


    img{
        width: 100%;
        height: 33rem;
        border-radius: 0.5rem;

        background-position: center;
        background-size: cover;
        background-clip: border-box;
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

    color: #003 !important;
    font-weight: 200;

    opacity: 0.6;
    font-size: 1rem;

    margin-top: 1rem;

    margin-left: 1rem;
    margin-right: 0.5rem;
    text-align: justify;


`;

export const CardBody = styled.section`


width: 22rem;

height: 8rem;
border-radius: 0.5rem;

margin: 0 auto;

background: #fff;


 

position: relative;
margin-top: -3rem;
 cursor: pointer;

 &:hover{
    transform: scale(1.1, 1.1);
    transition: 0.5s;
 }

`;


export const CardBodyTiled = styled.p`
    text-align: center;
    font-size: 1.4rem;
    position: relative;
    top: 2rem;
    margin-bottom: 3rem;
    
`


export const CardBodySubtitle = styled.p`

    text-align: center;

    color: #004 !important;
    font-weight: 400;
    


`;



export const Header = styled.header`

        width:56rem;
        height:6rem;

        margin-top: -2rem;

        box-shadow: 10px #ddd;

        position: relative;
      

        background: rgb(252,252,252);

        display: flex;
        align-items: center;

        gap: 0.5rem;

        


        input[type="text"]{
            padding:1rem;
            height:3rem;
            width: 85%;
            margin-left: -0.2rem;
        }

        button{
            width: 20%;
            height:3rem;
            top: -0.3rem;
            padding: 1rem;
            margin-left: 0.2rem;
            position: relative;
        }


        

`;
    
