import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

@observer
class ShoppingCartListItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const {product, removeProductClick} = this.props

        return (
            <li className='shopping-cart__list-item'>
                <button className='cart-list-item__button' 
                    onClick={removeProductClick}
                    title={`Remove '${product.name}'`}
                >
                    <FontAwesomeIcon icon='times' color='red' className='cart-list-item__button-icon' />
                </button>
                <span className='cart-list-item__product'>{product.name}</span>
                <span className='cart-list-item__price'>{product.price}$</span>
            </li>
        )
    }
}

export default ShoppingCartListItem