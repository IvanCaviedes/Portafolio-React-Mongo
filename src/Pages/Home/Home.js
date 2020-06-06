import React, { Component } from 'react'
// Componentes
import Loader from '../../Components/Home/Loader'
import Header from '../../Components/Home/Header'
import Informacion from '../../Components/Home/Informacion'
import Resumen from '../../Components/Home/Resumen'
import Servicios from '../../Components/Home/Servicios'
import Habilidades from '../../Components/Home/Habilidades'
import Trabajos from '../../Components/Home/Trabajos'
import Contratame from '../../Components/Home/contratame'
import Formulario from '../../Components/Home/formulario'
import Footer from '../../Components/Home/Footer'
import Subir from '../../Components/Home/Subir'

export default class Home extends Component {
    state = {
        url: 'http://localhost:2000/',
        Hea: [],
        Info: [],
        Resu:[],
        Serv:[],
        Ha:[],
        Tra:[]
    }
    componentDidMount() {
        this.Cabecera()
    }
    Cabecera = () => {
        const { url } = this.state
        fetch(url + 'Header')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Fallo en la Peticion')
            })
            .then(token => {
                this.setState({ Hea: token.users[0] })
                this.Finfo();
            })
            .catch(e => {
                console.log(e)
            })
    }
    Finfo = () => {
        const { url } = this.state
        fetch(url + 'Informacion')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Fallo en la Peticion')
            })
            .then(token => {
                this.setState({ Info: token.productos[0] })
                this.Estudios();
            })
            .catch(e => {
                console.log(e)
            })
    }
    Estudios = () => {
        const { url } = this.state
        fetch(url + 'Resumen')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Fallo en la Peticion')
            })
            .then(token => {
                this.setState({ Resu: token.users})
                this.Seri();
            })
            .catch(e => {
                console.log(e)
            })
    }
    Seri = () => {
        const { url } = this.state
        fetch(url + 'Servicios')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Fallo en la Peticion')
            })
            .then(token => {
                this.setState({ Serv: token.users})
                this.Habili();
            })
            .catch(e => {
                console.log(e)
            })
    }
    Habili = () => {
        const { url } = this.state
        fetch(url + 'Habilidades')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Fallo en la Peticion')
            })
            .then(token => {
                this.setState({ Ha: token.users})
                this.Trababa();
            })
            .catch(e => {
                console.log(e)
            })
    }
    Trababa = () => {
        const { url } = this.state
        fetch(url + 'Trabajos')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Fallo en la Peticion')
            })
            .then(token => {
                this.setState({ Tra: token.users})
            })
            .catch(e => {
                console.log(e)
            })
    }
    render() {
        const { Hea, Info,Resu,Serv,Ha,Tra } = this.state
        return (
            <>
                <Loader />
                <Header nombre={Hea.nombre} imagen={Hea.imagen} redes={Hea.redes} cargos={Hea.cargos} />
                <Informacion nombre={Hea.nombre} celular={Info.celular} correo={Info.correo} pais={Info.pais} descripcion={Info.descripcion} redes={Hea.redes}/>
                <Resumen estudios={Resu}/>
                <Servicios servicios={Serv}/>
                <Habilidades  habilidades={Ha}/>
                <Trabajos trab={Tra}/>
                <Contratame />
                <Formulario />
                <Footer />
                <Subir />
            </>
        )
    }
}
