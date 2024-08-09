import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    products: JSON.parse(localStorage.getItem('cart')) || []
  }),
  getters: {
    totalProductInCart: (state) => {
      return state.products.reduce((sum, current) => sum + current.selectedQuantity, 0)
    },
    sumAllProductInCart: (state) => {
      return state.products
        .reduce((sum, current) => sum + current.price * current.selectedQuantity, 0)
        .toFixed(2)
    }
  },
  actions: {
    addProduct(product, counter) {
      product.selectedQuantity = counter
      this.products = this.products.filter((item) => item.id !== product.id)
      this.products.push(product)
      this.updateStorage()
    },
    deleteProduct(product) {
      const index = this.products.indexOf(product.id)
      this.products.splice(index, 1)

      this.updateStorage()
    },
    updateStorage() {
      localStorage.setItem('cart', JSON.stringify(this.products))
      this.sortedProducts()
    },
    sortedProducts() {
      this.products = [...this.products].sort((a, b) => a.id - b.id)
    }
  }
})
