<template>
    <section class="bg-starts h-64">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div class="flex flex-col mt-12 pt-2 items-center h-full font-sans text-center font-light text-white tracking-widest text-6xl">
            <div class="title -mt-6">Portfolio</div>
            <input 
                class="h-12 w-5/6 sm:w-1/2 xl:w-1/3 text-2xl bg-gray-300 bg-opacity-50 placeholder-gray-900 rounded-full outline-none text-center"
                type="text"
                placeholder="Buscar..."
                @input="$emit('search', $event.target.value)"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue
{

}
</script>

<style scoped lang="scss">

</style>
