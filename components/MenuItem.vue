<script setup>
defineProps(['to', 'text', 'callback'])
</script>

<template>
  <li class="mb-6 font-headings text-4xl text-white lg:text-lg">
    <NuxtLink :to="to" class="transition duration-100 hover:text-gray-100" @click="callback">{{ text }}</NuxtLink>
  </li>
</template>
