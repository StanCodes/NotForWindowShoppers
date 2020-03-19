import React, { Component } from 'react'
import { observer } from 'mobx-react'

import ProductListItem from './ProductListItem'

@observer
class ProductsList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const store = this.props.store
        const products = store.allProducts
        return(
            <section className='products-list'>
                <h1 className='products-list__title'>All products list</h1>
                <ul className='products-list__list'>
                    {products.map(product => 
                        <ProductListItem product={product} 
                            addProductClick={() => store.addProductToCart(product.id)} 
                            key={product.id} 
                        />
                    )}
                </ul>
            </section>
        )
    }
}

export default ProductsList