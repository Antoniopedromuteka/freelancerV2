import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/habfree/habil"; 
import Cadastrar from "./Pages/Cadastrar/Cadastrar"
import UserProfile from "./Pages/UserProfile/UserProfile";
import {Profissionais} from "./Pages/profissionais/index"
import {BrowserRouter, Route, Routes} from  "react-router-dom"
import Empresas from "./Components/Empresas";
import Posts from "./Components/Posts";



function Rotas (){
    return(
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/UserProfile" element={<UserProfile/>}></Route>
        <Route exact path="/Profissionais" element={<Profissionais/>}></Route>
        <Route exact path="/Profissionais" element={<Profissionais/>}></Route>
        <Route exact path="/Empresas" element={<Empresas/>}></Route>
        <Route exact path="/Posts" element={<Posts/>}></Route>



        <Route exact path="/login" element={<Login/>}></Route> 
        <Route exact path="/cadastrar" element={<Login/>}></Route> 
       
    </Routes>
    </BrowserRouter>
    );
}
export default Rotas;