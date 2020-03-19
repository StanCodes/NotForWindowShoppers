import { observable, computed, action } from 'mobx'
//import ProductModel from './ProductModel'

class ProductsListModel {
    @observable cartProducts = []
    
    @observable allProducts = [
        { id: 1, name: 'So expensive keyboard', descr: 'Get rich or die tryin', price: 300 },
        { id: 2, name: 'Gold wireless mouse', descr: 'Bitch betta have my money', price: 200 },
        { id: 3, name: 'Boomer-doomer headset', descr: 'Why? Because we can!', price: 350 },
        { id: 4, name: 'iLaptop', descr: 'Killing price, but slaying the competition', price: 8000 },
        { id: 5, name: 'Frameless monitor', descr: 'Less frame, more screen', price: 700 },
        { id: 6, name: 'UltraSuperSonic desk', descr: 'Automatic win in every online game', price: 1200 },
    ]

    @computed get cartProductsCount() {
        return this.cartProducts.length
    }

    @computed get cartProductsTotal() {
        let total = 0
        this.cartProducts.forEach(p => {
            total += p.price
        })

        return total
    }

    getProductById(id) {
        return this.allProducts.find(product=> product.id === id)
    }

    @action addProductToCart(id) {
        const product = this.getProductById(id)
        this.cartProducts.push(product)
    }

    @action removeProductFromCart(id) {
        this.cartProducts = this.cartProducts.filter(product => product.id !== id)
    }
}

export default ProductsListModel