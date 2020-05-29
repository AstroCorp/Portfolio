<template>
  <div id="app">
    <Content />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Content from './components/Content.vue';

@Component({
  components: {
    Content,
  },
})

export default class App extends Vue {}
</script>

<style lang="scss">

</style>
