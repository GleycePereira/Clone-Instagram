import { Avatar } from "@mui/material";
import React from "react";
import "./Stories.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Imagens
import henry from "../assets/henryc.jpg"
import paloma from "../assets/paloma.jpg"
import tais from "../assets/tais.png"
import rafael from "../assets/rafael.jpg"
import naiara from "../assets/naiara.jpg"
import erica from "../assets/erica.jpg"

import yasmin from "../assets/yasmin.jpg"
import raul from "../assets/raul.jpg"
import pedro from "../assets/pedro.jpg"
import chris from "../assets/chris.jpg"
import jessica from "../assets/jessica.jpg"
import sheron from "../assets/sheron.png"

import idris from "../assets/idris.jpg"
import fegaray from "../assets/fegaray.png"
import corinthians from "../assets/corinthians.jpg"
import mano from "../assets/mano.jpg"
import pedropascal from "../assets/pedropascal.jpg"
import jessichanstain from "../assets/jesschastain.jpg"


import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function ConteudoCentralTeste() {

  return (
    
    <div className='stories'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          <SwiperSlide>
              <div className='foto'>
                <img className="cor" src={henry} alt="Henry Cavill"/>
                <img className="cor" src={paloma} alt="Paloma Fontes" />
                <img className="cor" src={tais} alt="Tais Araújo"/>
                <img className="cor" src={rafael} alt="Rafael Borges" />
                <img className="cor" src={naiara} alt="Naiara Souza"/>
                <img className="cor" src={erica} alt="Erica Fernandes" />
              
              </div>
              <div className='nome'>
                <p>henrycavill</p>
                <p>paloma_fontes</p>
                <p>taisdeverdade</p>
                <p>rafael_borges</p>
                <p>naiara_souza</p>
                <p>erica_fernandes</p>
                  
              </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className='foto'>
              <img className="cor" src={yasmin} alt="Yasmin Freitas" />
              <img className="cor" src={raul} alt="Raul Bilac" />
              <img className="cor" src={pedro} alt="Pedro Palmares" />
              <img className="cor" src={chris} alt="Chris Evans" />
              <img className="cor" src={jessica} alt="Jessica Cores" />
              <img className="cor" src={sheron} alt="Sheron Menezes"/>
            </div>
            <div className='nome'>
              <p>yasminfreitas</p>
              <p>raulbilac</p>
              <p>pedro_palmares</p>
              <p>evanschris</p>
              <p>coresjessica</p>
              <p>sheronmenezzes</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="foto">
              <img className="cor" src={idris} alt="Idris Elba" />
              <img className="cor" src={fegaray} alt="Fe Garay" />
              <img className="cor" src={corinthians} alt="Corinthians" />
              <img className="cor" src={mano} alt="Mano Brown" />
              <img className="cor" src={pedropascal} alt="Pedro Pascal" />
              <img className="cor" src={jessichanstain} alt="Jessica Chanstain" />
            </div>

            <div className="nome">
              <p>idriselba</p>
              <p>fegaray</p>
              <p>corinthians</p>
              <p>manobrown</p>
              <p>pedropascal</p>
              <p>jessichanstain</p>
            </div>
          </SwiperSlide>


        </Swiper>
    </div>
  );

}
