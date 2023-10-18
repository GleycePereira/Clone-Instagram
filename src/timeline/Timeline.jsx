import React, { useState } from "react";
import './Timeline.css'
import Sugestao from "./Sugestao";
import Post from "./post/Post";
import { Avatar } from "@mui/material";
import Stories from "./Stories";

// Imagem
import naiara from "../assets/naiara.jpg"
import gleyce from "../assets/gleyce.jpg"
import rafa from "../assets/rafa_grasseti.jpg"
import henry from "../assets/henryc.jpg"
import naughty from "../assets/naughty.png"
import monica from "../assets/monica.jpg"
import viola from "../assets/viola.jpg"

import postagem from "../assets/img_canva.jpeg"
import postagem_blade from "../assets/blade.jpg"


export default function Timeline() {
    const [post, setPost] = useState([
        {
            perfil: <Avatar> <img src={naiara} alt="Naiara Souza" width='40px' height='40px' /></Avatar>,
            user: "naiara_souza ",
            post_img: "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg",
            like: 70,
            data_post: "5h",
            legendas: "- Mais uma semana fotografando nesse lugar maravilhoso",
            comentarios: "Ver todos os 30 comentários",
        },

        {
            perfil: <Avatar> <img src={gleyce} alt="Gleyce" width='40px' height='40px' /></Avatar>,
            user: "gleyce_pereira",
            post_img: postagem,
            like: 50,
            data_post: "3h",
            legendas: "- Atividade realizada na oficina Conversa Inspiradora: Potencializando a sua marca pessoal pela FAAP, através do Instituto Proa.",
            comentarios: "Ver todos os 15 comentários",
        },

        {
            perfil: <Avatar> <img src={rafa} alt="Rafael Grassetti" width='40px' height='40px' /></Avatar>,
            user: "rafagrassetti ",
            post_img: postagem_blade,
            like: '12k',
            data_post: "7h",
            legendas: "- 🦇 I’m going to keep calling it Mutant Mayhem so people can say that Blade is not a mutant 😂🤝",
            comentarios: "Ver todos os 500 comentários",
        },

        {
            perfil: <Avatar> <img src={henry} alt="Henry Cavill" width='40px' height='40px' /></Avatar>,
            user: "henrycavill ",
            post_img: "https://i0.gmx.at/image/202/37569202,pd=1/henry-cavill.jpg",
            like: '213k',
            data_post: "5h",
            legendas: "- Says everything on the tin, right there.",
            comentarios: "Ver todos os 35.230 comentários",
        },

        {
            perfil: <Avatar> <img src={naughty} alt="Naughty Dog" width='40px' height='40px' /></Avatar>,
            user: "naughty_dog_inc ",
            post_img: "https://thelastofus.com.br/wp-content/uploads/2020/12/Cena-do-museu-de-The-Last-of-Us-2-e-uma-das-favoritas-de-Troy-Baker-representa-Joel-e-Ellie-encontrando-o-alivio-scaled.jpg",
            like: 900,
            data_post: "1d",
            legendas: "- Ellie and Joel 4ever 🦖🧑‍🚀",
            comentarios: "Ver todos os 2.314 comentários",
        },

        {
            perfil: <Avatar> <img src={monica} alt="Monica Felix" width='40px' height='40px' /></Avatar>,
            user: "monica_felix ",
            post_img: "https://fotografiamais.com.br/wp-content/uploads/2018/11/composicao-de-imagem-galeria-1.jpg",
            like: 100,
            data_post: "8h",
            legendas: "- Dia lindo na fazenda do meus avôs 🥰🤠🐎",
            comentarios: "Ver todos os 30 comentários",
        },

        {
            perfil: <Avatar> <img src={viola} alt="Viola Davis" width='40px' height='40px' /></Avatar>,
            user: "viola_davis ",
            post_img: "https://portalbeepop.com.br/wp-content/uploads/2023/08/VF0720_Viola_Davis_Tout.webp",
            like: "190k",
            data_post: "12h",
            legendas: "- ✌🏿🔥❤",
            comentarios: "Ver todos os 10.543 comentários",
        },
    ]);
    return (
        <div className="timeline" >
            <div className="timeline_conteudo">

                <div className="stories">
                    <Stories></Stories>
                </div>

                <div className="timeline_post">
                    {post.map(post =>
                        // Dentro do post passar as propriedades
                        <Post
                            // Looping de post com diferentes propriedades
                            perfil={post.perfil}
                            user={post.user}
                            post_img={post.post_img}
                            like={post.like}
                            data_post={post.data_post}
                            legendas={post.legendas}
                            comentarios={post.comentarios}
                        />)}
                </div>

            </div>
            <div className="timeline_direito">
                <Sugestao />
            </div>
        </div>
    )
}


// Criar um novo estado, então o estado é uma variável que contém alguns dado dentro dela.
// Para criar um estado, primeiro digitamos const que é JS
// Digita post para a nome da variável e setPost será uma função que podemos adicionar mais nele ou remover
// Agora digite useState, depois temos que importar lá em cima
// Teremos um objeto, então será um objeto com diferentes dados


// Criar um .map | Uma função map, neste map podemos usar cada parte dele em nosso componente
// Criar a variável post, e usamos '=>' para retornar um componente do post ( <Post/>)
// O metodo map() invoca a função callback passada por argumento para cada elemento do array e devolve
// um novo array como resultado 