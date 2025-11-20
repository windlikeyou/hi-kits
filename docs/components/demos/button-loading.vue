<template>
  <div class="button-demo">
    <MButton :loading="loading1" @click="loading1 = true">默认按钮</MButton>
    <MButton type="primary" :loading="loading2" @click="loading2 = true">主要按钮</MButton>
    <MButton type="success" :loading="loading3" @click="loading3 = true">成功按钮</MButton>
    <MButton type="warning" :loading="loading4" @click="loading4 = true">警告按钮</MButton>
    <MButton type="danger" :loading="loading5" @click="loading5 = true">危险按钮</MButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MButton } from 'moonwind-ui'

const loading1 = ref(false)
const loading2 = ref(false)
const loading3 = ref(false)
const loading4 = ref(false)
const loading5 = ref(false)
</script>

<style scoped>
.button-demo {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
</style>
