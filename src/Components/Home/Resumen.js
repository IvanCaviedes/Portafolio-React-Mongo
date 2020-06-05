import React from 'react'

export default function Resumen({ estudios }) {
    return (
        <div id="fh5co-resume" class="fh5co-bg-color">
            <div class="container">
                <div class="row animate-box">
                    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Mis Estudios</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 col-md-offset-0">
                        <ul class="timeline">
                            <li class="timeline-heading text-center animate-box">
                                <div>
                                    <h3>Que he estudiado!</h3>
                                </div>
                            </li>
                            {estudios.map((estudio, i) => {
                                if (i % 2) {
                                    return (
                                        < li class="timeline-inverted animate-box">
                                            <div class="timeline-badge"><i class="icon-suitcase"></i></div>
                                            <div class="timeline-panel">
                                                <div class="timeline-heading">
                                                    <h3 class="timeline-title">{estudio.titulo}</h3>
                                                    <span class="company">{estudio.compañia}</span>
                                                </div>
                                                <div class="timeline-body">
                                                    <p>{estudio.descripcion}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li class="animate-box timeline-unverted">
                                            <div class="timeline-badge"><i class="icon-suitcase"></i></div>
                                            <div class="timeline-panel">
                                                <div class="timeline-heading">
                                                    <h3 class="timeline-title">{estudio.titulo}</h3>
                                                    <span class="company">{estudio.compañia}</span>
                                                </div>
                                                <div class="timeline-body">
                                                    <p>{estudio.descripcion}</p>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
