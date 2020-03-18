import React from 'react'
import { hot } from 'react-hot-loader/root'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import HeaderBar from './components/HeaderBar'
import ProductsList from './components/ProductsList'

import './app.scss'

library.add(fab, faShoppingCart)

const App = () => {
    return (
        <React.Fragment>
            <HeaderBar />
            <ProductsList />
        </React.Fragment>
    )
}

export default hot(App)