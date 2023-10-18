import React from "react";
import './PaginaInicial.css'
import Lado_nav from './navegacao/Lado_nav'
import Timeline from './timeline/Timeline'

export default function PaginaInicial() {
    return (
        <div className="paginaInicial">
            <div className="paginaInicial_nav">
                <Lado_nav/>
            </div>

            <div className="paginaInicial_timeline">
                <Timeline/>
            </div>
        </div>
    )
}