<template>
    <footer class="flex flex-wrap bg-starts py-4">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div class="flex justify-center flex-row w-full">
            <div v-for="link in links" class="rounded-full h-12 w-12 text-xl text-white flex items-center m-1" :style="{ 'background-color': link.color }">
                <font-awesome-icon class="flex-1" :icon="['fab', link.icon]" />
            </div>
        </div>
        <div class="w-full text-center title text-xl mt-4">© 2020 Copyright Alejandro Leal Bermúdez. Todos los derechos reservados.</div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue
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
    ]
}
</script>

<style scoped lang="scss">

</style>
