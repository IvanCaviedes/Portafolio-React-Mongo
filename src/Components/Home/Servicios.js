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
                        {servicios && servicios.length>0 ? servicios.map((servicio) => {
                            return (
                                <div className="col-md-3 col-sm-3 text-center">
                                    <div className="feature-center">
                                        <span className="icon">
                                            <i className={`icon-${servicio.icono}`}></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>{servicio.Tservicios}</h3>
                                            <p>{servicio.descripcion}</p>
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
