<template>
  <div class="button-demo">
    <div class="demo-row">
      <MButton size="large">大型按钮</MButton>
      <MButton size="large" type="primary">大型按钮</MButton>
    </div>
    <div class="demo-row">
      <MButton size="medium">中型按钮</MButton>
      <MButton size="medium" type="primary">中型按钮</MButton>
    </div>
    <div class="demo-row">
      <MButton size="small">小型按钮</MButton>
      <MButton size="small" type="primary">小型按钮</MButton>
    </div>
  </div>
</template>

<script setup>
import { MButton } from "moonwind-ui";
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
