import React from 'react'

export default function Resumen({ estudios }) {
    return (
        <div id="fh5co-resume" className="fh5co-bg-color">
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Mis Estudios</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-md-offset-0">
                        {
                            estudios && estudios.length > 0 ?
                                <ul className="timeline">
                                    <li className="timeline-heading text-center">
                                        <div>
                                            <h3>Que he estudiado!</h3>
                                        </div>
                                    </li>
                                    {estudios.map((estudio, i) => {
                                        if (i % 2) {
                                            return (
                                                < li className="timeline-inverted animate__bounce" key={i}>
                                                    <div className="timeline-badge"><i className={`icon-${estudio.icono ? estudio.icono : 'eye-blocked'}`}></i></div>
                                                    <div className="timeline-panel">
                                                        <div className="timeline-heading">
                                                            <h3 className="timeline-title">{estudio.titulo}</h3>
                                                            <span className="company">{estudio.compañia}</span>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <p>{estudio.descripcion}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        else {
                                            return (
                                                <li className="timeline-unverted" key={i}>
                                                    <div className="timeline-badge"><i className={`icon-${estudio.icono ? estudio.icono : 'eye-blocked'}`}></i></div>
                                                    <div className="timeline-panel">
                                                        <div className="timeline-heading">
                                                            <h3 className="timeline-title">{estudio.titulo}</h3>
                                                            <span className="company">{estudio.compañia}</span>
                                                        </div>
                                                        <div className="timeline-body">
                                                            <p>{estudio.descripcion}</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul> :
                                < div className="timeline-heading text-center animate-box">
                                    <div>
                                        <h3>Esta esperando informacion del api!</h3>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
