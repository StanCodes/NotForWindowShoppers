import React from 'react'

const FilterInput = ({store}) => {
    return (
        <input type='text' 
            className='product-list__filter' 
            placeholder='Filter products...' 
            onInput={e => store.filterProducts(e.target.value)}
        />
    )
}

export default FilterInput