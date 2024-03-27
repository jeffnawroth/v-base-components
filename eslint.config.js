import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'src/vite-env.d.ts',
  ],
  rules: {
    'vue/max-attributes-per-line': 'error',
  },
})
