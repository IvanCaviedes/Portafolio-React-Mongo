import React from 'react'

export default function contratame({ porque }) {
    return (
        <div id="fh5co-started" className="animate-box">
            <div className="overlay"></div>
            <div className="container">
                <div className="row animate-box">
                    <div className="col-md-8 col-md-offset-2 text-center ">
                        <h2>Contratame!</h2>
                        <p>{porque?porque:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae veritatis, dolor iure deleniti rerum rem necessitatibus esse repudiandae pariatur aspernatur!'}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
