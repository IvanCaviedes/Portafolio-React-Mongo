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
                        {servicios && servicios.length>0 ? servicios.map((servici,i) => {
                            return (
                                <div className="col-md-3 col-sm-3 text-center" key={i}>
                                    <div className="feature-center">
                                        <span className="icon">
                                            <i className={`icon-${servici.icono}`}></i>
                                        </span>
                                        <div className="feature-copy">
                                            <h3>{servici.Tservicios}</h3>
                                            <p>{servici.descripcion}</p>
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
