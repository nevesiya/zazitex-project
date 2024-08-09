<template>
  <button class="button" :disabled="props.disabled" @click="emits('click')">
    {{ props.title }}
  </button>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  },
  disabled: {
    type: Boolean
  }
})

const emits = defineEmits(['click'])
</script>

<style lang="scss" scoped>
.button {
  width: 100%;
  padding: 5px 15px;
  color: var(--fourth);
  background: var(--secondary);
  border-radius: 2px;
  transition: all 0.25s;
  text-transform: uppercase;

  &:hover {
    color: var(--secondary);
    background: var(--fourth);
  }
}

@media (max-width: 768px) {
  .button {
    padding: 10px 15px;
  }
}
</style>
