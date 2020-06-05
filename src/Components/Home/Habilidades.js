import React from 'react'

export default function Habilidades({ habilidades }) {
    return (
        <div id="fh5co-skills" class="animate-box">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Habilidades</h2>
                    </div>
                </div>
                <div class="row row-pb-md">
                    {habilidades.map((habilidad) => {
                        return (
                            <div class="col-md-3 col-sm-6 col-xs-12 text-center">
                                <div  class="chart" data-percent={habilidad.porcentaje}><span><strong>{habilidad.nombre}</strong>{habilidad.porcentaje}%</span></div>
                            </div>
                        )
                    })}
                </div>
                <div class="row">
                    {habilidades.map((habilidad) => {
                        return (
                            <div class="col-md-6">
                                <div class="progress-wrap">
                                    <h3><span class="name-left">{habilidad.nombre}</span><span class="value-right">{habilidad.porcentaje}%</span></h3>
                                    <div class="progress">
                                        <div class="progress-bar progress-bar-striped active" role="progressbar"
                                            aria-valuenow={habilidad.porcentaje} aria-valuemin="0" aria-valuemax="100" style={{ width: `${habilidad.porcentaje}%`,backgroundColor:'#FF3396' }}>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
