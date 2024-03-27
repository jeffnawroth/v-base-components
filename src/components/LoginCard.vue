<script setup lang="ts">
// Emits
defineEmits(['login', 'register', 'forgotPassword'])

// Props
const email = defineModel('email', { required: true, type: String })
const password = defineModel('password', { required: true, type: String })

// State
const form = ref<HTMLFormElement | null>(null)
</script>

<template>
  <v-form
    ref="form"
    @submit.prevent="$emit('login')"
  >
    <v-card title="Login">
      <v-card-text>
        <v-text-field
          v-model="email"
          variant="outlined"
          prepend-inner-icon="mdi-email-outline"
          placeholder="Email address"
        />
        <v-text-field
          v-model="password"
          type="password"
          variant="outlined"
          prepend-inner-icon="mdi-key"
          placeholder="Password"
        />
      </v-card-text>
      <v-card-actions>
        <v-row>
          <v-col cols="12">
            <v-btn
              type="submit"
              size="large"
              block
              variant="tonal"
              color="primary"
              text="Log in"
            />
          </v-col>
          <v-col
            cols="12"
            class="d-flex justify-center"
          >
            <a
              class="text-decoration-none"
              @click="$emit('forgotPassword')"
            >Forgotten password?</a>
          </v-col>
          <v-col cols="12">
            <v-divider />
          </v-col>
          <v-col
            cols="12"
            class="d-flex justify-center"
          >
            <v-btn
              color="success"
              size="large"
              variant="tonal"
              text="Create new account"
              @click="$emit('register')"
            />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
