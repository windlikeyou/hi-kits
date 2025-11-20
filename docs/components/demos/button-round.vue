<template>
  <div class="button-demo">
    <div class="demo-row">
      <MButton round>默认按钮</MButton>
      <MButton type="primary" round>主要按钮</MButton>
      <MButton type="success" round>成功按钮</MButton>
      <MButton type="warning" round>警告按钮</MButton>
      <MButton type="danger" round>危险按钮</MButton>
    </div>
    <div class="demo-row">
      <MButton size="large" round>大型按钮</MButton>
      <MButton size="medium" round>中型按钮</MButton>
      <MButton size="small" round>小型按钮</MButton>
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
  flex-wrap: wrap;
}
</style>
