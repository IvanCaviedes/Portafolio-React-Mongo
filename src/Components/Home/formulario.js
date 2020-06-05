import React from 'react'

export default function formulario() {
    return (
<div id="fh5co-consult">
			<div class="video fh5co-video" style={{backgroundImage: 'url(images/cover_bg_1.jpg)'}}>
				<div class="overlay"></div>
			</div>
			<div class="choose animate-box">
				<h2>Contact</h2>
				<form action="#">
					<div class="row form-group">
						<div class="col-md-6">
							<input type="text" id="fname" class="form-control" placeholder="Tu Nombre"/>
						</div>
                        <div class="col-md-6">
							<input type="text" id="lname" class="form-control" placeholder="Tu Apellido"/>
						</div>
					</div>
					<div class="row form-group">
						<div class="col-md-12">
							<input type="text" id="email" class="form-control" placeholder="Tu Correo Electronico"/>
						</div>
					</div>

					<div class="row form-group">
						<div class="col-md-12">
							<input type="text" id="subject" class="form-control"
								placeholder="Asunto del mensaje"/>
						</div>
					</div>

					<div class="row form-group">
						<div class="col-md-12">
							<textarea name="message" id="message" cols="30" rows="10" class="form-control"
								placeholder="Escribeme para mas informacion!"></textarea>
						</div>
					</div>
					<div class="form-group">
						<input type="submit" value="Enviar mensaje" class="btn btn-primary btn-block"/>
					</div>

				</form>
			</div>
		</div>

    )
}
