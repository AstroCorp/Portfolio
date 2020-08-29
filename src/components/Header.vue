<template>
    <header class="flex content-between flex-wrap h-screen w-10 mx-2 py-2">
        <div class="flex flex-col w-10">
            <a href="/" class="w-10 h-10">
                <img src="/images/header/logo.png" alt="logo">
            </a>
        </div>

        <div class="flex flex-col w-10">
            <a v-for="(link, index) in links" :key="index" :href="link.url" target="_blank" class="h-10 w-10 text-xl text-white flex items-center my-1" :style="{ 'background-color': link.color }">
                <font-awesome-icon class="flex-1" :icon="['fab', link.icon]" />
            </a>
        </div>

        <div class="flex flex-col w-10 h-10" >
            <a v-if="showGoToTopButton" href="#top" class="h-10 w-10 text-xl text-white bg-gray-900 flex items-center cursor-pointer">
                <font-awesome-icon class="flex-1" :icon="['fas', 'chevron-up']" />
            </a>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: ['showGoToTopButton']
})
export default class Header extends Vue
{
    private links: any = [
        {
            icon: 'facebook-f',
            color: '#3B5998',
            url: 'https://www.facebook.com/AstroCorpESP/',
        },
        {
            icon: 'twitter',
            color: '#55ACEE',
            url: 'https://twitter.com/astro_corp',
        },
        {
            icon: 'github',
            color: '#2B6CAD',
            url: 'https://github.com/AstroCorp',
        },
        {
            icon: 'linkedin-in',
            color: '#0F5091',
            url: 'https://www.linkedin.com/in/alejandro-leal-bermúdez/',
        },
        {
            icon: 'twitch',
            color: '#9147FF',
            url: 'https://www.twitch.tv/astro_corp',
        },
        {
            icon: 'youtube',
            color: '#DD4B39',
            url: 'https://www.youtube.com/c/AstroCorpESP',
        }
    ];
}
</script>

<style scoped lang="scss">

</style>
