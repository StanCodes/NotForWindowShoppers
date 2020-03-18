import React, { Component } from 'react'

export default class ProductsList extends Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        return(
            <section className='products-list'>
                <h1 className='products-list__title'>All products list</h1>
                <ul className='products-list__list'>
                    <li className='products-list__list-item'>
                        <article className='products-list-item__article'>
                            <h4 className='products-list-item__title'>Product 1</h4>
                            <img className='products-list-item__image' 
                                src='./content/images/samurai-jack.jpeg' 
                                alt='samurai jack' 
                            />
                            <p className='products-list-item__descr'>This is a very good product i have no time to explain</p>
                            <button className='products-list-item__button'>Add to cart</button>
                        </article>
                    </li>
                    <li className='products-list__list-item'>
                        <article className='products-list-item__article'>
                            <h4 className='products-list-item__title'>Product 2</h4>
                            <img className='products-list-item__image' 
                                src='./content/images/samurai-jack.jpeg' 
                                alt='samurai jack' 
                            />
                            <p className='products-list-item__descr'>This is a very good product</p>
                            <button className='products-list-item__button'>Add to cart</button>
                        </article>
                    </li>
                    <li className='products-list__list-item'>
                        <article className='products-list-item__article'>
                            <h4 className='products-list-item__title'>Product 3</h4>
                            <img className='products-list-item__image' 
                                src='./content/images/samurai-jack.jpeg' 
                                alt='samurai jack' 
                            />
                            <p className='products-list-item__descr'>This is a very good product</p>
                            <button className='products-list-item__button'>Add to cart</button>
                        </article>
                    </li>
                    <li className='products-list__list-item'>
                        <article className='products-list-item__article'>
                            <h4 className='products-list-item__title'>Product 4</h4>
                            <img className='products-list-item__image' 
                                src='./content/images/samurai-jack.jpeg' 
                                alt='samurai jack' 
                            />
                            <p className='products-list-item__descr'>This is a very good product</p>
                            <button className='products-list-item__button'>Add to cart</button>
                        </article>
                    </li>
                </ul>
            </section>
        )
    }
}