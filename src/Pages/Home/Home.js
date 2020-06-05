import React from 'react'
// Componentes
import Loader from '../../Components/Home/Loader'
import Header from '../../Components/Home/Header'
import Informacion from '../../Components/Home/Informacion'
import Resumen from '../../Components/Home/Resumen'
import Servicios from '../../Components/Home/Servicios'
import Habilidades from '../../Components/Home/Habilidades'

export default function Home() {
    const habilidades = [
        { nombre: 'HTML5', porcentaje: '50' },
    ]
    return (
        <>
            <Loader />
            <Header />
            <Informacion />
            <Resumen />
            <Servicios />
            <Habilidades />
        </>
    )
}
