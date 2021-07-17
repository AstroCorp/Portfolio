<template>
  <div class="min-h-screen p-10 bg-custom-bg font-sans">
    <div class="w-16 h-16 mx-auto mb-10 bg-custom-logo p-2 rounded-full">
      <img class="rounded-full -mt-0.5" src="./images/header/logo.png" alt="logo">
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <a v-for="(project, index) in projects" :key="index" class="bg-custom-box m-2" :href="'https://github.com/AstroCorp/' + project.name" target="_blank">
        <img class="w-full" :src="'./images/projects/' + project.name + '.png'" />
        <div class="p-4 text-justify text-custom-text">
          {{ project.description }}
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import projects from './projects';

export default {
  data() {
    return {
      projects,
    };
  },
}
</script>
