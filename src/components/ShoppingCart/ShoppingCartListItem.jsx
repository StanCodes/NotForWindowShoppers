import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ShoppingCartListItem = ({product, removeProductClick}) => {
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

export default ShoppingCartListItem