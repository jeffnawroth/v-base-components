<script setup lang="ts">
const password = ref('')
const email = ref('')
</script>

<template>
  <LoginCard v-model:email="email" v-model:password="password" />
</template>
