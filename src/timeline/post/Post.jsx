import React from "react";
import './Post.css'
import { Avatar } from "@mui/material"
import { RiMoreFill } from "react-icons/ri";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { BsBookmarks } from "react-icons/bs";


export default function Post(props) {
    return (
        <div className="post">
            <div className="post_header">
                <div className="perfil">
                    {props.perfil}
                    <span className="usuario">{props.user}</span>•<span className="data">{props.data_post}</span>
                </div>
                <RiMoreFill className="icone_tres" />
            </div>

            <div className="post_imagem">
                <img src={props.post_img} alt="" />
            </div>

            <div className="post_footer">

                <div className="post_icone">
                    <div className="post_iconReacao">
                        <AiOutlineHeart className="icones" style={{height: '25px', width: '25px'}}/>
                        <FaRegComments className="icones" style={{height: '25px', width: '25px'}}/>
                        <TbLocationShare className="icones" style={{height: '25px', width: '25px'}}/>
                    </div>
                    <div className="post_save">
                        <BsBookmarks className="icones"/>
                    </div>
                </div>

                <span className="likes">Curtido por {props.like} pessoas</span>

                <div className="legenda">
                    <span className="usuario_leg">{props.user}</span> 
                    <span className="cor_leg">{props.legendas}</span>
                </div>

                <div className="post_comentario">
                    <span className="cont">{props.comentarios}</span>

                    <div className="comentar">
                        <span>Adicione um comentário... </span>
                    </div>
                </div>

            </div>
        </div>

    )
}