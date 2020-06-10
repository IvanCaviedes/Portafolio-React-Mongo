import React from 'react'

export default function Trabajos({ trab }) {
    return (
        <div id="fh5co-work" className="fh5co-bg-dark">
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Mis Trabajos</h2>
                    </div>
                </div>
                <div className="row">
                    {trab && trab.length>0 ? trab.map((trabajo,i) => {
                        return (
                            <div className="col-md-3 col-sm-6 text-center col-padding" key={i}>
                                <a href={trabajo.link} className="work" style={{ backgroundImage: `url(${trabajo.imagen})` }}>
                                    <div className="desc">
                                        <h3>{trabajo.nombre}</h3>
                                        <span>{trabajo.descripcion}</span>
                                    </div>
                                </a>
                            </div>
                        )
                    }) :
                        < div className="timeline-heading text-center animate-box">
                            <div>
                                <h3>No hay nada aqui!</h3>
                            </div>
                        </div>}
                </div>
            </div>
        </div>
    )
}
