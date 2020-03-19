import React, { Component } from 'react'
import { observer } from 'mobx-react'

import ShoppingCartListItem from './ShoppingCartListItem'

@observer
class ShoppingCart extends Component {
    constructor(props){
        super(props)
    }

    render() {
        const { show, store } = this.props
        const { cartProducts, cartProductsTotal } = store

        return(
            <section className={`shopping-cart ${show ? 'sc-opened': ''}`}>
                <h2 className='shopping-cart__title'>Your shopping list</h2>
                <ul className='shopping-cart__list'>
                    {cartProducts.map( product => 
                        <ShoppingCartListItem product={product} removeProductClick={() => store.removeProductFromCart(product.id)} key={product.id} />
                    )}
                    {!cartProducts.length && <p>No products in your cart</p>}
                </ul>
                {cartProducts.length != 0 && <div className='shopping-cart__summary'>
                    <p className='cart-summary__total'>Total:</p>
                    <span className='cart-summary__total-price'>{cartProductsTotal}$</span>
                </div>}
            </section>
        )
    }
}

export default ShoppingCart