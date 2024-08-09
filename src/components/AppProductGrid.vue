<template>
  <div class="wrapper">
    <div class="product-list">
      <template v-for="product in productsStore.products" :key="product.id">
        <AppProductCard :product="product" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '@/stores/products.js'
import AppProductCard from '@/components/AppProductCard.vue'

const productsStore = useProductsStore()

onMounted(async () => productsStore.getProducts())
</script>

<style lang="scss" scoped></style>
