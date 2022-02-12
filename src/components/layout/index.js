import React from 'react'
import Navigation from '../nav'
import Footer from '../footer'

const Layout = ({ children }) => {
    return(
        <div className="bg-lightGreen z-10">
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}

export default Layout