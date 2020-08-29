<template>
    <a class="card m-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 overflow-hidden shadow-lg bg-white" :href="repository.html_url" target="_blank">
        <img class="w-full" :src="'images/repositories/' + repository.name + '.png'" />
        <div class="p-6 text-justify">
            {{ repository.description }}
        </div>
    </a>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: ['repository']
})
export default class Card extends Vue
{
    
}
</script>

<style scoped lang="scss">
.card {
    height: 370px;
    width: 285px;
}
</style>
