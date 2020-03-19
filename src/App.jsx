import React from 'react'
import { hot } from 'react-hot-loader/root'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'

import ProductsListModel from './models/ProductsListModel'

import HeaderBar from './components/HeaderBar'
import ProductsList from './components/ProductsList'

import './app.scss'

library.add(fab, faShoppingCart, faTimes)

const store = new ProductsListModel()

const App = () => {
    return (
        <React.Fragment>
            <HeaderBar store={store} />
            <ProductsList store={store} />
        </React.Fragment>
    )
}

export default hot(App)