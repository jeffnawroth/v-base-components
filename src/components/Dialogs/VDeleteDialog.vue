<script setup lang="ts">
// Props
interface Props {
  title: string
  subtitle: string
  type: string
  name: string
}

withDefaults(defineProps<Props>(), {
  title: 'Löschen',
  subtitle: 'Möchten Sie wirklich löschen?',
})

const dialog = defineModel<boolean>({ required: true })

// Functions
function handleDialog() {
  dialog.value = !dialog.value
}

function handleDelete() {
  dialog.value = false
}
</script>

<template>
  <VBaseDialog v-model="dialog" :title :subtitle>
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
