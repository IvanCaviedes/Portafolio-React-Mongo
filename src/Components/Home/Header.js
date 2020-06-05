import React from 'react'

const Header = ({imagen,nombre,cargos,redes}) => {

    return (

         <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner"
             style={{ backgroundImage: 'url(images/cover_bg_3.jpg)' }} data-stellar-background-ratio="0.5">
              <div className="overlay"></div>
             <div className="container">
               <div className="row">
                     <div className="col-md-8 col-md-offset-2 text-center">
                         <div className="display-t js-fullheight">
                              <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                 <div className="profile-thumb" style={{ background:`${imagen?imagen:'url(images/Sinimagen.png)'}` }}></div>
                                 <h1><span>{nombre?nombre:'Esperando nombre del api'}</span></h1>
                                 <h3><span>{cargos?cargos.primero:''} {cargos?`/ ${cargos.segundo}`:''}</span></h3>
                                 <div style={{padding:"30px"}}>
                                     <ul className="fh5co-social-icons">
                                         <li><a href={redes?redes.Twitter:''}><i className="icon-twitter2"></i></a></li>
                                         <li><a href={redes?redes.Facebook:''}><i className="icon-facebook2"></i></a></li>
                                         <li><a href={redes?redes.Instagram:''}><i className="icon-instagram"></i></a></li>
                                         <li><a href={redes?redes.Github:''}><i className="icon-github"></i></a></li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div> 
         </header>
    )
}

export default Header
