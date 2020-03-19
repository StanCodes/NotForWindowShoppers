import React from 'react'

const ProductListItem = ({product, addProductClick}) => {
    return(
        <li className='products-list__list-item'>
            <article className='products-list-item__article'>
                <h4 className='products-list-item__title'>
                    {product.name}
                </h4>
                <img className='products-list-item__image' 
                    src='./content/images/samurai-jack.jpeg' 
                    alt='samurai jack' 
                />
                <p className='products-list-item__descr'>
                    {product.descr}
                </p>
                <p className='product-list-item__price'>
                    {product.price}$
                </p>
                <button className='products-list-item__button' onClick={addProductClick}>Add to cart</button>
            </article>
        </li>
    )
}

export default ProductListItem