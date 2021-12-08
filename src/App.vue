<script setup lang="ts">
import { storeToRefs } from 'pinia';
import useMainStore from './stores/main';
import Card from './components/Card.vue';

const main = useMainStore();
const { repositories } = storeToRefs(main);
</script>

<template>
  <div class="bg-gray-800 h-screen w-screen font-sans">
    <div class="flex flex-col items-center">
      <div class="pt-6 pb-8">
        <a href="https://github.com/AstroCorp" target="_blank" class="bg-logo block h-20 w-20 rounded-full overflow-hidden p-2.5">
          <img src="/assets/logo.png" alt="logo" class="-mt-0.5" />
        </a>
      </div>
      
      <div class="text-center">
        <Card v-for="repo in repositories" :key="repo.title" :repository="repo" />
      </div>
    </div>
  </div>
</template>
