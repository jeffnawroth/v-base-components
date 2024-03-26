<script setup lang="ts">
const dialog = ref(false)

function handleDialog() {
  dialog.value = !dialog.value
}
</script>

<template>
  <v-btn text="open" @click="handleDialog" />

  <VDeleteDialog v-model="dialog" />
</template>
