import React from 'react'
// Componentes
import Loader from '../../Components/Home/Loader'
import Header from '../../Components/Home/Header'
import Informacion from '../../Components/Home/Informacion'

export default function Home() {
    return (
        <>
           <Loader/>
            <Header/> 
            <Informacion />
        </>
    )
}
