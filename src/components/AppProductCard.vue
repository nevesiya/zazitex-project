<template>
  <div class="card">
    <img class="card__img" :src="product.img" alt="" />
    <p class="card__rating">
      <img
        class="card__rating-icon"
        src="@/assets/images/star.svg
    "
        alt=""
      />
      {{ product.rating }}
    </p>
    <h6 class="card__title">{{ product.title }}</h6>
    <p class="card__manufacturer">{{ product.manufacturer }}</p>
    <p class="card__price">{{ product.price }} €</p>
    <ChangeQuantityProduct
      v-if="showQuantity || !isShowCartButton"
      @zero="removeFromCart"
      :product="product"
      :current="product.selectedQuantity || selectedQuantity"
    />
    <BaseButton v-else @click="addToCart" :title="'Add to cart'" class="card__button" />
    <BaseButton
      v-if="!isShowCartButton"
      @click="removeFromCart"
      :title="'Remove from cart'"
      class="card__button"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCartStore } from '@/stores/cart.js'
import BaseButton from '@/components/ui/BaseButton.vue'
import ChangeQuantityProduct from '@/components/ChangeQuantityProduct.vue'

const cartStore = useCartStore()

const props = defineProps({
  product: {
    type: Object,
    require: true
  },
  isShowCartButton: {
    type: Boolean,
    default: true
  }
})

const product = ref(props.product)

const showQuantity = ref(false)
const addToCart = () => {
  showQuantity.value = true
  cartStore.addProduct(product.value, 1)
}
const removeFromCart = () => {
  showQuantity.value = false
  cartStore.deleteProduct(product.value)
}

const selectedQuantity = ref(1)
const isProdcutInCart = () => {
  const index = cartStore.products.findIndex((item) => item.id === product.value.id)
  console.log(index)

  if (index != -1) {
    showQuantity.value = true
    selectedQuantity.value = cartStore.products[index].selectedQuantity
  }
}

onMounted(async () => isProdcutInCart())
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  // flex-grow: 1;
  gap: 5px;
  // width: 275px;
  width: calc((100% - (3 * 20px)) / 4);
  padding: 10px 15px;
  border: 1px var(--secondary) solid;
  border-radius: 5px;
  transition: all 0.25s;

  &:hover {
    box-shadow: 5px 5px 20px 1px var(--secondary);
  }

  &__title {
    font-weight: 700;
  }

  &__manufacturer {
    font-size: 14px;
    font-style: italic;
    margin-bottom: 10px;
    flex: 1;
  }

  &__price {
    margin-bottom: 20px;
  }

  &__button {
    align-self: flex-end;
  }

  &__rating {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
  }

  &__rating-icon {
    width: 16px;
  }
}

@media (max-width: 1200px) {
  .card {
    width: calc((100% - (3 * 20px)) / 4);
  }
}

@media (max-width: 900px) {
  .card {
    width: calc((100% - (2 * 20px)) / 3);
  }
}

@media (max-width: 768px) {
  .card {
    width: calc((100% - 20px) / 2);
  }
}

@media (max-width: 480px) {
  .card {
    width: calc(100% / 1);
  }
}
</style>
