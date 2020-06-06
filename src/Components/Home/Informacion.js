import React from 'react'
const Informacion = ({ nombre, celular, correo, pais, descripcion, redes }) => {
    return (
        <div id="fh5co-about" className="animate-box">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                        <h2>Sobre mí</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <ul className="info">
                            <li><span className="first-block">Nombre:</span><span className="second-block">{nombre ? nombre : 'Nombre Api'}</span></li>
                            <li><span className="first-block">Celular:</span><span className="second-block">+57 {celular ? celular : 'Celular Api'}</span></li>
                            <li><span className="first-block">Correo:</span><span className="second-block">{correo ? correo : 'Correo Api'}</span></li>
                            <li><span className="first-block">País:</span><span className="second-block">{pais ? pais : 'Pais'}</span></li></ul>
                    </div>
                    <div className="col-md-8">
                        <h2>Hola a todos!</h2>
                        <p>{descripcion ? descripcion : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A temporibus numquam quo veritatis assumenda corrupti iste amet laudantium debitis voluptate vero nihil molestiae, illo incidunt ad iure blanditiis id vel aperiam! Debitis eius consequuntur voluptatem recusandae possimus. Provident, voluptate necessitatibus.'}</p>

                        <div>
                            <ul className="fh5co-social-icons" >
                                <li style={{ paddingRight: '10px' }}><a href={redes ? redes.Twitter : ''}><i className="icon-twitter2"></i></a></li>
                                <li style={{ paddingRight: '10px' }}><a href={redes ? redes.Facebook : ''}><i className="icon-facebook3"></i></a></li>
                                <li style={{ paddingRight: '10px' }}><a href={redes ? redes.Instagram : ''}><i className="icon-instagram2"></i></a></li>
                                <li ><a href={redes ? redes.Github : ''}><i className="icon-github2"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Informacion
