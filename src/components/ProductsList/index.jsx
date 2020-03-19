import React, { Component } from 'react'
import { observer } from 'mobx-react'

import FilterInput from './FilterInput'
import ProductListItem from './ProductListItem'

@observer
class ProductsList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const store = this.props.store
        const products = store.filteredProducts
        return(
            <section className='products-list'>
                <div className='product-list__group'>
                    <h1 className='products-list__title'>All products list</h1>
                    <FilterInput store={store} />
                </div>
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