<script setup>
defineProps(['title', 'subtitle', 'image'])
</script>

<template>
  <div class="relative py-32 lg:pt-96">
    <div class="container relative z-50 text-white">
      <h1 class="mb-20 text-4xl font-normal leading-snug text-white lg:text-6xl">
        {{ title }}
      </h1>
      <p class="mb-12 lg:max-w-96">
        {{ subtitle }}
      </p>
    </div>
    <img class="absolute left-0 top-0 z-10 h-full w-full object-cover" :src="image" />
  </div>
</template>
