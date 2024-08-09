<template>
  <AppGrid>
    <template #title>
      <h6>Products</h6>
    </template>
    <template v-for="product in displayedProducts" :key="product.id">
      <AppProductCard :product="product" />
    </template>
    <BaseButton
      v-show="isShowButtonMore"
      @click="loadMoreItems"
      class="load-more"
      :title="'load more'"
    />
  </AppGrid>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useProductsStore } from '@/stores/products.js'
import AppGrid from '@/components/AppGrid.vue'
import AppProductCard from '@/components/AppProductCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const productsStore = useProductsStore()

const itemsPerPage = 12
const displayedItemsCount = ref(itemsPerPage)
const displayedProducts = computed(() => productsStore.products.slice(0, displayedItemsCount.value))
const isShowButtonMore = computed(() => displayedItemsCount.value <= productsStore.products.length)
const loadMoreItems = () => {
  displayedItemsCount.value += itemsPerPage
}

onMounted(async () => productsStore.getProducts())
</script>

<style lang="scss" scoped>
.load-more {
  margin-top: 30px;
}
</style>
