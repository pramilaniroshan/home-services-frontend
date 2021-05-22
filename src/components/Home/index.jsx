import React from 'react'
import Landing from '../Landing'
import Footer from '../Footer'
import Sc from '../Servicecard'
import Header from '../Header/Header'
export default function index() {
    return (
        <div>
            <Header />
            <Landing />
            <div class="row"> 
            <Sc />
            <Sc />
            <Sc />
            <Sc />
            <Sc />
            <Sc />
            <Sc />
            <Sc />
            </div>
            <Footer />
        </div>
    )
}
