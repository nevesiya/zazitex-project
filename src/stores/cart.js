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
      const index = this.products.findIndex((item) => item.id === product.id)

      if (index != -1) {
        this.products[index].selectedQuantity = counter
      } else {
        product.selectedQuantity = counter
        this.products.push(product)
      }

      this.updateStorage()
    },
    deleteProduct(product) {
      const index = this.products.findIndex((item) => item.id === product.id)
      this.products.splice(index, 1)

      this.updateStorage()
    },
    updateStorage() {
      localStorage.setItem('cart', JSON.stringify(this.products))
    }
  }
})
