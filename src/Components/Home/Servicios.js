import React from 'react'

export default function Servicios({ servicios }) {
    return (
        <div id="fh5co-features" className="animate-box">
            <div className="container">
                <div className="services-padding">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Mis Servicios</h2>
                        </div>
                    </div>
                    <div className="row">
                        {servicios ? servicios.map((servicio) => {
                            return (
                                <div className="col-md-4 text-center">
                                    <div className="feature-left">
                                        <span className="icon">
                                            <i className={`icon-${servicio.icono}`}></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>{servicio.Tservicio}</h3>
                                            <p>{servicio.descipcion}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) :
                            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                                <h3 style = {{ color:"white"}}>Esperando Informacion de la Api...</h3> 
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
