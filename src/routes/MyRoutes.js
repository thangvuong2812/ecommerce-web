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
            <Route path="/" exact component={Home} />
            <Route path="/catalog/:slug" component={Product} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/accessories" component={Acccessories} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}

export default MyRoutes
