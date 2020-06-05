import React from 'react'

export default function Habilidades({ habilidades }) {

    return (
        <div id="fh5co-skills" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Habilidades</h2>
                    </div>
                </div>
                <div className="row row-pb-md">
                    {habilidades ? habilidades.map((habilidad) => {
                        return (
                            <>
                                <div className="col-md-4 col-sm-6 col-xs-12 text-center">
                                    <div className="chart" data-color="#3ACA68" data-percent={habilidad.porcentaje}><span><strong>{habilidad.nombre}</strong>{habilidad.porcentaje}%</span></div>
                                </div>

                            </>
                        )
                    }) :
                        < div className="timeline-heading text-center animate-box">
                            <div>
                                <h3>Esta esperando informacion del api!</h3>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
