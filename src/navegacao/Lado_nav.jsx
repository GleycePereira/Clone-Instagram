// CTRL + D seleciona div, class, etc que deseja e pode reescrever depois
import React from "react";
import './Lado_nav.css'
import { FcHome } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { BsFillCompassFill } from "react-icons/bs";
import { FcClapperboard } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { IoIosCreate } from "react-icons/io";
import { CgMoreR } from "react-icons/cg";
import { Avatar } from "@mui/material";

// Imagem
import gleyce from "../assets/gleyce.jpg"
import logo from "../assets/talk.png"


export default function Lado_nav() {
    return (
        <div className="lado_nav">
            <img className="logo" src={logo} alt="Logo Talk" />

            <div className="botoes">

                <button className="escolher_botao">
                    <div className="home">
                        <FcHome style={{height: '25px', width: '25px'}} />
                        <span className="id">Home</span>
                    </div>
                </button>

                <button className="escolher_botao">
                    <div className="pesquisa">
                        <FcSearch style={{height: '20px', width: '20px'}}/>
                        <span className="id">Pesquisar</span>
                    </div>
                </button>

                <button className="escolher_botao">
                    <div className="explore">
                        <BsFillCompassFill style={{height: '20px', width: '20px'}}/>
                        <span className="id">Explorar</span>
                    </div>
                </button>

                <button className="escolher_botao">
                    <div className="reel">
                        <FcClapperboard style={{height: '20px', width: '20px'}}/>
                        <span className="id">Reels</span>
                    </div>
                </button>

                <button className="escolher_botao">
                    <div className="mensagem">
                        <RiKakaoTalkFill style={{height: '20px', width: '20px'}}/>
                        <span className="id">Mensagens</span>
                    </div>
                </button>
                
                <button className="escolher_botao">
                    <div className="notificacao">
                        <BsFillBalloonHeartFill style={{height: '20px', width: '20px'}}/>
                        <span className="id">Notificações</span>
                    </div>
                </button>

                <button className="escolher_botao">
                    <div className="criar_">
                        <IoIosCreate style={{height: '20px', width: '20px'}}/>
                        <span className="id" >Criar</span>
                    </div>
                    
                </button>

                <button className="escolher_botao">
                    <Avatar> <img src={gleyce} alt="Gleyce" width='50px' height='50px' /></Avatar>
                    <span className="id">Perfil</span>
                </button>

            </div>

            <div className="botao_mais">
                <button className="escolher_botao">
                    <CgMoreR style={{height: '20px', width: '20px'}}/>
                    <span className="id">Mais</span>
                </button>
            </div>

        </div>
    )
}