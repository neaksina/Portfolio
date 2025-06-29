<template>
  <div class="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
    <h3 class="text-xl font-bold mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <a :href="link" target="_blank" class="text-blue-600 hover:underline">View Project</a>
  </div>
</template>

<script setup>
defineProps(['title', 'description', 'link'])
</script>
