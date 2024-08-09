<template>
  <div class="wrapper">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="product-list">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  padding: 50px 0;
}

.title {
  margin-top: 50px;
  font-size: 40px;
}
</style>
