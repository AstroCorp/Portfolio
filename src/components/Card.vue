<template>
    <div class="card m-2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 overflow-hidden shadow-lg bg-white">
        <div class="relative mb-6">
            <img class="w-full" :src="'./images/' + repository.name + '.png'" />
            <a :href="repository.html_url" class="absolute w-full" style="bottom: -30px">
                <div class="open-btn mx-auto flex items-center h-12 w-12 p-4 rounded-full transition ease-in duration-200 focus:outline-none">
                    <font-awesome-icon class="flex-1 text-white" :icon="['fas', 'external-link-alt']" />
                </div>
            </a>
        </div>
        <div class="py-10 px-6 text-justify">
            {{ repository.description }}
        </div>
    </div>
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
    width:285px;

    .open-btn {
        background-color: #6617cb;
        background-image: linear-gradient(315deg, #6617cb 0%, #d43a97 74%);
        box-shadow: 0 0 0 0 #d43a97, 0.2rem 0.2rem 30px #6617cb;

        &:hover {
            box-shadow: 0 0 0 0 #d43a97, 0.2rem 0.2rem 60px #6617cb;
        }
    }
}
</style>
