import React from 'react'

export default function Trabajos({trab}) {
    return (
        <div id="fh5co-work" class="fh5co-bg-dark">
            <div class="container">
                <div class="row animate-box">
                    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Mis Trabajos</h2>
                    </div>
                </div>
                <div class="row">
                    {trab.map((trabajo)=>{
                        return(
                            <div class="col-md-3 text-center col-padding animate-box">
                            <a href={trabajo.link} class="work" style={{ backgroundImage: `url(${trabajo.imagen})` }}>
                                <div class="desc">
                                    <h3>{trabajo.nombre}</h3>
                                    <span>{trabajo.descripcion}</span>
                                </div>
                            </a>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
