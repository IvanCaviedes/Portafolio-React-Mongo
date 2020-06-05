import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Error() {
    let history = useHistory()
    return (
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner"
            style={{ backgroundImage: 'url(images/cover_bg_3.jpg)' }} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                <h1>Error vuelve a la pagina de inicio</h1>
 
                                <input onClick={() => history.goBack()} value="Volver" className="btn btn-warning btn-block " style={{marginTop:'80px'}}/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

