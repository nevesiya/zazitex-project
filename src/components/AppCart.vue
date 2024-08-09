<template>
  <div class="cart">
    <img class="cart__icon" src="@/assets/images/cart.svg" alt="" />
    <span v-show="cartStore.totalProductInCart" class="cart__quantity">{{
      cartStore.totalProductInCart
    }}</span>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.cart {
  position: relative;
  width: 40px;

  &__quantity {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 30px;
    bottom: 25px;
    border-radius: 50%;
    text-align: center;
    background: var(--secondary);
    color: var(--primary);
  }
}
</style>
