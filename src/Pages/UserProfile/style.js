
import styled from 'styled-components';
import * as I from "react-icons/bs";


export const Container = styled.div`
    
    width: 100%;
    height: 100vh;
    background: #ddd !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

`;


export const Card = styled.div`

    width: 95%;
    height: 80vh;
    margin-top: 2rem;
    background: #fff;
    border-radius: 0.1rem;
    display: flex;
   
    justify-content: space-between;
    padding: 1.5rem;
 
    background-color: #fff;

   
`;


export const SectionRight = styled.section`
    width: 80%;
    height: 18rem;
    margin-top: 2rem;
   // border-bottom: 2px solid #ccc;
 //   background: rgb(54, 42, 165);
    
`

export const SectionLeft = styled.section`

    width: 16%;
    height: 34rem;
    //background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    border-right: 0.1rem solid #dcd;
     

    margin-right: 0.5rem;
  



`;


export const UserPicture = styled.section`

    margin-top: 3rem;
    width: 12rem;
    height: 12rem;

    border-radius: 50%;
    border-color: #005;
    border: 0.1rem solid;
    background-image: url("https://scontent.flad2-1.fna.fbcdn.net/v/t39.30808-6/271546469_1596233004060035_7400260638872846696_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGQLhsKU0FU44SNEyknzlHsXr20ajuJeHdevbRqO4l4d5oGMGNq69FMV4oKwbxX_hD9EThI4PuZKZyrrWTsjcBu&_nc_ohc=7jvtPNOm7a4AX9E_GY5&_nc_ht=scontent.flad2-1.fna&oh=00_AT-5LFm_ABpH7IbDx0llMePUGi8EzhTE5x2ThYGECcMD_w&oe=62A6C03E");
    background-position-x: center;
    background-clip: border-box;
    background-repeat: no-repeat;
    background-size: cover;
`;


export const ContentTop = styled.section`

    width: 100%;
    height: 3rem;
    background: #ddd;
    margin-top: 0.5rem;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const UserName = styled.h2`

    color: #000;
    margin-left: 0.5rem;

`;


export const RightInfo = styled.section`

    display: flex;
    flex-direction: column;
    
    justify-content: space-between;

    width: 8rem;
    height: 3rem;
    //background: #543;
    margin-right: 2rem; 


`;



export const ValueInfo = styled.span`

    font-size: 1.2rem;



`;


export const Label = styled.span`

    font-size: 0.9rem;
    
`;





export const Extras = styled.span`

    margin-top: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 2rem;
    font-size: 0.8rem;
    color: #004;

`;

export const ExtrasInfo = styled.section`

    display: flex;
    flex-direction: column;

`;







export const Description = styled.h1`

    margin-top: 2rem;
    margin-left: 0.4rem;
    margin-bottom: 1rem;

 
`; 




export const Rate = styled.div`

    margin-top: 2rem;
    margin-right: 1.4rem;
    
`


export const StarIcon = styled(I.BsStarFill)`

    font-size: 2rem;
    margin-right: 0.5rem;
`

 
 


export const SocialIcons = styled.section`

    display: flex;
  

`







export const Title = styled.span`
    margin-left: 0.4rem;
`;


export const Skill = styled.button`

    width: 9.5rem;
    color: #fff;
    height: 2rem;
    background: #004;
    border-radius: 0.4rem;
    margin-right: 0.1rem;

`;

export const Resolve = styled.div`
    display:flex;

`;



export const section = styled.div`

    width: 100%;
    
    display: flex;
    justify-content: space-evenly;
`;




export const SectionBottom = styled.section`

    width: 100%;
    height: 13rem;
    margin-top: 0.5rem;
    background: #ddd;

`;


export const Contactar = styled.button`

    width: 10rem;
    height: 2rem;
    background: #004;
    margin-left: 1rem ;
    margin-top: 3rem;



`