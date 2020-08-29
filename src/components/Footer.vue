<template>
    <footer class="my-8">
        <div class="text-gray-extra text-center">© {{ getYear }} Copyright Alejandro Leal Bermúdez. Todos los derechos reservados.</div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue
{
    public get getYear(): number {
        return new Date().getFullYear();
    }
}
</script>

<style scoped lang="scss">

</style>
