import React from 'react'
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

export default function Home() {

    return (
        <>
            <Loader />
            <Header />
            <Informacion />
            <Resumen />
            <Servicios />
            <Habilidades />
            <Trabajos />
            <Contratame />
            <Formulario />
            <Footer />
            <Subir />
        </>
    )
}
