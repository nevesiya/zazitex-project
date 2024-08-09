<template>
  <AppGrid>
    <template #title>
      <div v-if="!cartStore.totalProductInCart" class="empty">Your cart is empty</div>
      <div v-else>
        <p class="total">Total: {{ cartStore.sumAllProductInCart }} €</p>
      </div>
    </template>
    <template v-for="product in cartStore.products" :key="product.id">
      <AppProductCard :isShowCartButton="false" :product="product" />
    </template>
  </AppGrid>
</template>

<script setup>
import { useCartStore } from '@/stores/cart.js'
import AppGrid from '@/components/AppGrid.vue'
import AppProductCard from '@/components/AppProductCard.vue'

const cartStore = useCartStore()
</script>

<style lang="scss" scoped></style>
