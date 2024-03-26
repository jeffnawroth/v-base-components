<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

const dialog = defineModel<boolean>({ required: true })
</script>

<template>
  <v-dialog v-model="dialog">
    <v-card v-bind="$attrs">
      <template v-for="(_, slotName) in $slots" :key="slotName" #[(slotName)]="slotData ">
        <slot :name="slotName" v-bind="slotData || {}" />
      </template>
    </v-card>
  </v-dialog>
</template>
