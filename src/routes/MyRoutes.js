import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import Product from '../pages/Product';
import Acccessories from '../pages/Acccessories';
import Contact from '../pages/Contact';

function MyRoutes() {
    return (
        <Switch>
            <Route path="/ecommerce-web/" exact component={Home} />
            <Route path="/ecommerce-web/catalog/:slug" component={Product} />
            <Route path="/ecommerce-web/catalog" component={Catalog} />
            <Route path="/ecommerce-web/cart" component={Cart} />
            <Route path="/ecommerce-web/accessories" component={Acccessories} />
            <Route path="/ecommerce-web/contact" component={Contact} />
        </Switch>
    )
}

export default MyRoutes
