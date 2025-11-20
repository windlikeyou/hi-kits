<template>
  <div class="button-demo">
    <div class="demo-row">
      <MButton circle>+</MButton>
      <MButton type="primary" circle>✓</MButton>
      <MButton type="success" circle>✓</MButton>
      <MButton type="warning" circle>!</MButton>
      <MButton type="danger" circle></MButton>
    </div>
    <div class="demo-row">
      <MButton size="large" circle>L</MButton>
      <MButton size="medium" circle>M</MButton>
      <MButton size="small" circle>S</MButton>
    </div>
    <div class="demo-row">
      <MButton type="primary" circle disabled>D</MButton>
      <MButton type="success" circle loading></MButton>
      <MButton circle>📝</MButton>
      <MButton type="danger" circle>🗑</MButton>
    </div>
  </div>
</template>

<script setup>
import { MButton } from 'moonwind-ui'
</script>

<style scoped>
.button-demo {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.demo-row {
  display: flex;
  gap: 12px;
  align-items: center;
}
</style>
