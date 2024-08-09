<template>
  <div class="heaader">
    <div class="wrapper">
      <div class="heaader-wrapper">
        <RouterLink to="/">
          <img to="/" class="logo" src="@/assets/images/logo.svg" alt="" />
        </RouterLink>
        <RouterLink to="/cart">
          <AppCart />
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppCart from '@/components/AppCart.vue'
</script>

<style lang="scss" scoped>
.heaader {
  position: sticky;
  top: 0;
  background: var(--primary);
}

.heaader-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
}

.logo {
  width: 80px;
}
</style>
