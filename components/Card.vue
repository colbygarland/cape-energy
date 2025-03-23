<script setup lang="ts">
const props = defineProps(['title', 'body', 'list'])
</script>

<template>
  <div class="rounded-md border border-gray-100 p-4 shadow">
    <h3 class="text-xl text-secondary-700">{{ props.title }}</h3>
    <p>{{ props.body }}</p>
    <ul v-if="props.list" class="mt-2 list-disc pl-4">
      <li class="mb-2" v-for="item in props.list" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>
