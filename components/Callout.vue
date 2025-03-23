<script setup lang="ts">
const props = defineProps(['body'])
</script>

<template>
  <section class="container bg-primary-900 text-center text-white">
    <h3>
      {{ props.body }}
    </h3>
  </section>
</template>
