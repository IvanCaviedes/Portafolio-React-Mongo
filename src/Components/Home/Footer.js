import React from 'react'

export default function Footer({link}) {
    return (
        <div id="fh5co-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p>Diseño creado en {new Date().getFullYear()} <br />Designed by <a
                            href={link}>Ivan Caviedes</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
