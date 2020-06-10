
import React, { Component } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export default class formulario extends Component {
	state = {
		name: '',
		correo: '',
		asunto:'',
		texto:'',
		url:'https://backenhomepage.herokuapp.com/'
	}
	send = (e) => {
		e.preventDefault();
		const { name, correo,asunto,texto } = this.state
		if (name.length <= 0 || correo.length <= 0 || asunto.length <= 0||texto.length <= 0) {
			MySwal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Por favor revisa tus datos!'
			})
		}
		else {
			const { url } = this.state
			const datos={
				name:name, 
				correo:correo,
				asunto:asunto,
				texto:texto
			}
			const envio = {
				method: 'POST',
				body: JSON.stringify(datos),
				headers: new Headers({
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}),
			};
			fetch(url + 'Correo/register',envio)
				.then(response => {
					if (response.ok) {
						return response.json()
					}
					throw new Error('Fallo en la Peticion')
				})
				.then(token => {
					if(token.mensaje === 'Correo enviado'){
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Correo Envido con exito!',
							showConfirmButton: false,
							timer: 1500
						})

					}
					else{
						Swal.fire({
							icon: 'error',
							title: 'Falla al enviar el correo!',
							showConfirmButton: false,
							timer: 1500
						})
					}

					this.setState({
						name:'',
						correo:'',
						asunto:'',
						texto:''
					})
				})
				.catch(e => {
					console.log(e)
				})
		}

	}
	render() {
		return (
			<div id="fh5co-consult">
				<div className="video fh5co-video" style={{ backgroundImage: 'url(images/cover_bg_1.jpg)' }}>
					<div className="overlay"></div>
				</div>
				<div className="choose animate-box">
					<h2>Contacto</h2>
					<form onSubmit={this.send}>
						<div className="row form-group">
							<div className="col-md-12">
								<input type="text"
									id="fname"
									className="form-control"
									placeholder="Tu Nombre Completo"
									value={this.state.name}
									onChange={(e) => {
										const { value } = e.target
										// maybe more code here...
										this.setState({ name: value })
									}}
								/>
							</div>
						</div>
						<div className="row form-group">
							<div className="col-md-12">
								<input type="email"
									id="email"
									className="form-control"
									placeholder="Tu Correo Electronico"
									value={this.state.correo}
									onChange={(e) => {
										const { value } = e.target
										// maybe more code here...
										this.setState({ correo: value })
									}}
								/>
							</div>
						</div>

						<div className="row form-group">
							<div className="col-md-12">
								<input type="text" id="subject"
									className="form-control"
									placeholder="Asunto del mensaje" 
									value={this.state.asunto}
									onChange={(e) => {
										const { value } = e.target
										// maybe more code here...
										this.setState({ asunto: value })
									}}
									/>
							</div>
						</div>

						<div className="row form-group">
							<div className="col-md-12">
								<textarea name="message" 
								id="message" 
								cols="30" 
								rows="10" 
								className="form-control"
								placeholder="Escribeme para mas informacion!"
								value={this.state.texto}
									onChange={(e) => {
										const { value } = e.target
										// maybe more code here...
										this.setState({ texto: value })
									}}
								></textarea>
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
}
