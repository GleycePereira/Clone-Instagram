import React from "react";
import './Sugestao.css'
import { Avatar } from "@mui/material";

// Imagens
import gleyce from "../assets/gleyce.jpg"
import ellie from "../assets/ellie.jpg"
import arthur from "../assets/arthur.jpg"
import sadie from "../assets/sadie.png"
import chloe from "../assets/chloe.jpeg"



export default function Sugestao() {
    return (
        <div className="sugestao">

            <div className="nome_usuario">
                <div className="perfil_usuario">
                    <span className="avatar">
                        <Avatar style={{height: '50px', width: '50px'}}> <img src={gleyce} alt="Gleyce" width='50px' height='50px' /></Avatar>
                    </span>
                    <div className="usuario_info">
                        <span className="perfil">gleyce_pereira</span>
                        <span className="relacao">Gleyce Pereira</span>
                    </div>
                </div>
                <button className="seguir">Mudar</button>

            </div>

            <div className="sugestao_titulo">Sugestão para você</div>

            <div className="usuarios_sugestao">

                <div className="nome_usuario">
                    <div className="perfil_usuario">
                        <span className="avatar">
                            <Avatar style={{height: '50px', width: '50px'}} ><img src={ellie} alt="Ellie Willians" width='50px' height='60px' /></Avatar>
                        </span>
                        <div className="usuario_info">
                            <span className="perfil">ellie_williams</span>
                            <span className="relacao">Novo no instagram</span>
                        </div>
                    </div>
                    <button className="seguir">Seguir</button>

                </div>

                <div className="nome_usuario">
                    <div className="perfil_usuario">
                        <span className="avatar">
                        <Avatar style={{height: '50px', width: '50px'}} ><img src={arthur} alt="Arthur Morgan" width='50px' height='50px' /></Avatar>
                        </span>
                        <div className="usuario_info">
                            <span className="perfil">arhurmorgan</span>
                            <span className="relacao">Novo no instagram</span>
                        </div>
                    </div>
                    <button className="seguir">Seguir</button>

                </div>

                <div className="nome_usuario">
                    <div className="perfil_usuario">
                        <span className="avatar">
                        <Avatar style={{height: '50px', width: '50px'}} ><img src={sadie} alt="Sadie Adler" width='50px' height='50px' /></Avatar>
                        </span>
                        <div className="usuario_info">
                            <span className="perfil">sadie_adler</span>
                            <span className="relacao">Novo no instagram</span>
                        </div>
                    </div>
                    <button className="seguir">Seguir</button>

                </div>

                <div className="nome_usuario">
                    <div className="perfil_usuario">
                        <span className="avatar">
                        <Avatar style={{height: '50px', width: '50px'}} ><img src={chloe} alt="Chloe Price" width='50px' height='50px' /></Avatar>
                        </span>
                        <div className="usuario_info">
                            <span className="perfil">chloe_fucking_Price</span>
                            <span className="relacao">Novo no instagram</span>
                        </div>
                    </div>
                    <button className="seguir">Seguir</button>

                </div>



            </div>

        </div>
    )
}