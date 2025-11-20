<template>
  <div class="button-demo">
    <MButton disabled>默认按钮</MButton>
    <MButton type="primary" disabled>主要按钮</MButton>
    <MButton type="success" disabled>成功按钮</MButton>
    <MButton type="warning" disabled>警告按钮</MButton>
    <MButton type="danger" disabled>危险按钮</MButton>
  </div>
</template>

<script setup>
import { MButton } from "moonwind-ui";
</script>

<style scoped>
.button-demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
