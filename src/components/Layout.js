import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import MyRoutes from '../routes/MyRoutes'
import Footer from './Footer'
import Header from './Header'
import ProductViewModal from './ProductViewModal'

function Layout() {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props} />
                    <div className="container">
                        <div className="main">
                            <MyRoutes />
                        </div>
                    </div>
                    <Footer />
                    <ProductViewModal/>
                </div>
            )} />
        </BrowserRouter>
    )
}

export default Layout
