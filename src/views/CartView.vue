<template>
  <div class="wrapper">
    <div v-if="!cartStore.totalProductInCart" class="empty">Your cart is empty</div>
    <div v-else>
      <p class="total">Total: {{ cartStore.sumAllProductInCart }} €</p>
    </div>
    <AppCartGrid />
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart.js'
import AppCartGrid from '@/components/AppCartGrid.vue'

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.total,
.empty {
  margin-top: 50px;
  font-size: 40px;
}
</style>
