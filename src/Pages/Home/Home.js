import React from 'react'
// Componentes
import Loader from '../../Components/Home/Loader'
import Header from '../../Components/Home/Header'
import Informacion from '../../Components/Home/Informacion'
import Resumen from '../../Components/Home/Resumen'
import Servicios from '../../Components/Home/Servicios'

export default function Home() {

    return (
        <>
            <Loader />
            <Header />
            <Informacion />
            <Resumen />
            <Servicios/>
        </>
    )
}
