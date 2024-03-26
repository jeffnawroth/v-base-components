<script setup lang="ts">
// Props
interface Props {
  title?: string
  subtitle?: string
  type?: string
  name?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Löschen',
  subtitle: 'Möchten Sie wirklich löschen?',
})

const model = defineModel<boolean>({ required: true })

// Functions
function handleDialog() {
  model.value = !model.value
}

function handleDelete() {
  model.value = false
}
</script>

<template>
  <VBaseDialog v-model="model" :title :subtitle>
    <template #actions>
      <v-btn @click="handleDialog">
        Abbrechen
      </v-btn>
      <v-btn @click="handleDelete">
        Löschen
      </v-btn>
    </template>
  </VBaseDialog>
</template>
