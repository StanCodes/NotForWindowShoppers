import React from 'react'

const ShoppingCart = (props) => {
    return(
        <section className={`shopping-cart ${props.show ? 'sc-opened': ''}`}>
            <h2 className='shopping-cart__title'>Your shopping list</h2>
            <ul className='shopping-cart__list'>
                <li className='shopping-cart__list-item'>
                    <span className='cart-list-item__product'>Product 2</span>
                    <span className='cart-list-item__price'>10.00$</span>
                </li>
                <li className='shopping-cart__list-item'>
                    <span className='cart-list-item__product'>Product 3</span>
                    <span className='cart-list-item__price'>12.56$</span>
                </li>
                <li className='shopping-cart__list-item'>
                    <span className='cart-list-item__product'>Product 4</span>
                    <span className='cart-list-item__price'>15.00$</span>
                </li>
            </ul>
            <div className='shopping-cart__summary'>
                <p className='cart-summary__total'>Total:</p>
                <span className='cart-summary__total-price'>37.56$</span>
            </div>
        </section>
    )
}

export default ShoppingCart