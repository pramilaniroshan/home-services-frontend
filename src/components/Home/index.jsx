import React from 'react'
import Landing from '../Landing'
import Footer from '../Footer'
import Sc from '../Servicecard'
import ServiceList from '../ShowServiceList'
import Header from '../Header/Header'
export default function index() {
    return (
        <div>
            <Header />
            <Landing />
            
            <ServiceList />
           
            <Footer />
        </div>
    )
}
