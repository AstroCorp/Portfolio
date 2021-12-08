<script setup lang="ts">
import Repository from '../types/repository';

const props = defineProps<{ repository: Repository }>();
</script>

<template>
  <div class="inline-block w-96 m-2 rounded-3xl overflow-hidden hover:shadow-2xl">
    <div class="relative">
      <img :src="'../assets/images/' + repository.title.replaceAll(' ', '-') + '.png'" />

      <div class="absolute bottom-6 left-0 right-0 flex justify-center">
        <a
          v-for="link in repository.links" 
          :href="link.url" 
          target="_blank"
          class="bg-gray-200 bg-opacity-80 hover:bg-opacity-100 text-sm mx-2 mb-3 px-4 py-2 rounded-full"
        >
          {{ link.title }}
        </a>
      </div>
    </div>

    <div class="relative h-48 z-10 p-6 -mt-6 bg-gray-700 rounded-3xl">
      <h2 class="text-left text-white text-2xl font-semibold mb-4">{{ repository.title }}</h2>
      <p class="text-left text-gray-400">{{ repository.description }}</p>
    </div>
  </div>
</template>
