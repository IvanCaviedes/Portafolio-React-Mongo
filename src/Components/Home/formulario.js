import React from 'react'

export default function formulario() {
	return (
		<div id="fh5co-consult">
			<div className="video fh5co-video" style={{ backgroundImage: 'url(images/cover_bg_1.jpg)' }}>
				<div className="overlay"></div>
			</div>
			<div className="choose animate-box">
				<h2>Contact</h2>
				<form action="#">
					<div className="row form-group">
						<div className="col-md-12">
							<input type="text" id="fname" className="form-control" placeholder="Tu Nombre Completo" pattern="[A-Za-z0-9]{1,15}"/>
						</div>
					</div>
					<div className="row form-group">
						<div className="col-md-12">
							<input type="text" id="email" className="form-control" placeholder="Tu Correo Electronico" />
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<input type="text" id="subject" className="form-control"
								placeholder="Asunto del mensaje" />
						</div>
					</div>

					<div className="row form-group">
						<div className="col-md-12">
							<textarea name="message" id="message" cols="30" rows="10" className="form-control"
								placeholder="Escribeme para mas informacion!"></textarea>
						</div>
					</div>
					<div className="form-group">
						<input type="submit" value="Enviar mensaje" className="btn btn-primary btn-block" />
					</div>
				</form>
			</div>
		</div>
	)
}
