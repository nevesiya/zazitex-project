<template>
  <div class="quantity">
    <span v-if="counter === 1" @click="decrease">
      <img class="quantity__trash" src="@/assets/images/trash.svg" alt="" />
    </span>
    <span v-else @click="decrease">
      <img class="quantity__minus" src="@/assets/images/minus.svg" alt="" />
    </span>
    <p v-if="recheadLimit">Maximum added: {{ counter }}</p>
    <p v-else>{{ counter }}</p>
    <span v-if="!recheadLimit" @click="increase">
      <img class="quantity__plus" src="@/assets/images/plus.svg" alt="" />
    </span>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useCartStore } from '@/stores/cart.js'

const cartStore = useCartStore()

const props = defineProps({
  product: {
    type: Object,
    require: true
  },
  current: {
    type: Number,
    default: 1
  }
})
const emits = defineEmits(['limit', 'zero'])

const counter = ref(props.current)

const recheadLimit = computed(() => counter.value === props.product.quantity)

const increase = () => {
  if (props.product.quantity === counter.value) {
    emits('limit')
    return
  }

  counter.value++
}
const decrease = () => {
  if (counter.value === 1) {
    emits('zero')
    return
  }

  counter.value--
}

watch(counter, () => {
  cartStore.addProduct(props.product, counter.value)
})
</script>

<style lang="scss" scoped>
.quantity {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 15px;
  background: var(--secondary);

  &__minus,
  &__plus,
  &__trash {
    width: 16px;
    transition: all 0.25s ease;
  }

  &__minus:hover,
  &__plus:hover,
  &__trash:hover {
    opacity: 0.5;
  }
}
</style>
