import React from 'react'
const Informacion = ({ nombre, celular, correo, pais,descripcion,redes }) => {
    return (
        <div id="fh5co-about" class="animate-box">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Sobre mí</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <ul class="info">
                            <li><span class="first-block">Nombre:</span><span class="second-block">{nombre}</span></li>
                            <li><span class="first-block">Celular:</span><span class="second-block">{celular}</span></li>
                            <li><span class="first-block">Correo:</span><span class="second-block">{correo}</span></li>
                            <li><span class="first-block">País:</span><span class="second-block">{pais}</span></li></ul>
                    </div>
                    <div class="col-md-8">
                        <h2>Hola a todos!</h2>
                        <p>{descripcion}</p>
                        <p>
                            <ul class="fh5co-social-icons" >
                                <li style={{paddingRight:'10px'}}><a href={redes.Twitter}><i className="icon-twitter2"></i></a></li>
                                <li style={{paddingRight:'10px'}}><a href={redes.Facebook}><i className="icon-facebook3"></i></a></li>
                                <li style={{paddingRight:'10px'}}><a href={redes.Instagram}><i className="icon-instagram2"></i></a></li>
                                <li ><a href={redes.Github}><i class="icon-github2"></i></a></li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informacion
