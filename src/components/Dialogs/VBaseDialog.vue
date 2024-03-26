<script setup lang="ts">
// Options
defineOptions({
  inheritAttrs: false,
})

// test

// Props
const dialog = defineModel<boolean>({ required: true })
</script>

<template>
  <v-dialog v-model="dialog">
    <v-card v-bind="$attrs">
      <!-- TODO: Fix error -->
      <template v-for="(_, slotName) in $slots" :key="slotName" #[(slotName)]="slotData ">
        <slot :name="slotName" v-bind="slotData || {}" />
      </template>
    </v-card>
  </v-dialog>
</template>
