<template>
  <div
    v-if="loading"
    class="d-flex justify-center align-center flex-column"
  >
    <v-progress-circular color="accent" indeterminate :size="30" width="5" />
    <div class="grey--text font-weight-bold">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: null
    }
  },
}
</script>
