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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25px;
    height: 25px;
    left: 30px;
    bottom: 25px;
    border-radius: 50%;
    text-align: center;
    background: var(--secondary);
    color: var(--primary);
  }
}
</style>
