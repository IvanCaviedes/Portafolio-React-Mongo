import React from 'react'
import { useState, useEffect } from 'react'
import Home from './Home'
// Servicios
import GetFetch from '../../Services/Usefetch'


export default function Index() {
    // Peticiones a servidor
    const Header = GetFetch('https://dog.ceo/api/breeds/image/random');
    const Info = GetFetch('https://dog.ceo/api/breeds/image/random');
    const Resu = GetFetch('https://dog.ceo/api/breeds/image/random');
    const Servi = GetFetch('https://dog.ceo/api/breeds/image/random');
    const Habi = GetFetch('https://dog.ceo/api/breeds/image/random');
    const Traba = GetFetch('https://dog.ceo/api/breeds/image/random');
    const Contra = GetFetch('https://dog.ceo/api/breeds/image/random');

    return (
        <>
            <Home
                cabeza={Header.data}
                Info={Info.data}
                Resu={Resu.data}
                Servi={Servi.data}
                Habi={Habi.data}
                Traba={Traba.data}
                Conta = {Contra.data}
            />
        </>
    )
}
