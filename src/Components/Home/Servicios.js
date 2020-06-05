import React from 'react'

export default function Servicios({ servicios }) {
    return (
        <div id="fh5co-features" class="animate-box">
            <div class="container">
                <div class="services-padding">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Mis Servivios</h2>
                        </div>
                    </div>
                    <div class="row">
                        {servicios.map((servicio) => {
                            return (
                                <div class="col-md-4 text-center">
                                    <div class="feature-left">
                                        <span class="icon">
                                            <i class={`icon-${servicio.icono}`}></i>
                                        </span>
                                        <div class="feature-copy">
                                            <h3>{servicio.Tservicio}</h3>
                                            <p>{servicio.descipcion}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}
