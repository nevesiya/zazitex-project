import { defineStore } from 'pinia'
import { fetchData } from '@/api/apiProducts'

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: []
  }),
  actions: {
    async getProducts() {
      this.products = await fetchData('products.json')
    }
  }
})
