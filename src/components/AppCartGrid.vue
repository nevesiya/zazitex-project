<template>
  <div class="wrapper">
    <div class="product-list">
      <template v-for="product in cartStore.products" :key="product.id">
        <AppProductCard :isShowCartButton="false" :product="product" />
      </template>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart.js'
import AppProductCard from '@/components/AppProductCard.vue'

const cartStore = useCartStore()
</script>

<style lang="scss" scoped></style>
