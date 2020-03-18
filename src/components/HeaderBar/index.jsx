import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ShoppingCart from '../ShoppingCart'

export default class HeaderBar extends Component {
    constructor(props){
        super(props)

        this.state = {
            showShoppingCart: false
        }

        this.handleSCShow = this.handleSCShow.bind(this)
        this.handleSCHide = this.handleSCHide.bind(this)
    }

    handleSCShow() {
        this.setState({
            showShoppingCart: true
        })
    }

    handleSCHide() {
        this.setState({
            showShoppingCart: false
        })
    }

    render() {
        return(
            <nav className='header-bar'>
                <h1 className='header-bar__title'>NFWShoppers</h1>
                <span className='header-bar__shopping' 
                    onClick={this.handleSCShow}
                    onMouseEnter={this.handleSCShow}
                    onMouseLeave={this.handleSCHide}
                >
                    <FontAwesomeIcon icon='shopping-cart' color='white' className='header-bar__shopping-icon' />
                    <span className='header-bar__products-count'>3</span>
                    <ShoppingCart show={this.state.showShoppingCart} />
                </span>
            </nav>
        )
    }
}