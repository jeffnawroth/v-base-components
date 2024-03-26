<script setup lang="ts">
// Emits
defineEmits(['submit'])

// Props
const email = defineModel('email', { required: true, type: String })
const password = defineModel('password', { required: true, type: String })

// State
const form = ref<HTMLFormElement | null>(null)

// test
</script>

<template>
  <v-form ref="form" @submit.prevent="">
    <v-card title="Login">
      <v-card-text>
        <v-text-field v-model="email" variant="outlined" prepend-inner-icon="mdi-email-outline" placeholder="Email adress" />
        <v-text-field v-model="password" type="password" variant="outlined" prepend-inner-icon="mdi-key" placeholder="Password" />
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col cols="12">
            <v-btn type="submit" size="large" block variant="tonal" color="primary" text="Log in" @click="$emit('submit')" />
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <a class="text-decoration-none" href="#">Forgotten password?</a>
          </v-col>
          <v-col cols="12">
            <v-divider />
          </v-col>
          <v-col cols="12" class="d-flex justify-center">
            <v-btn color="success" size="large" variant="tonal" text="Create new account" />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
