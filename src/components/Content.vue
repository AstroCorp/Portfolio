<template>
    <div>
        <Header />
        
        <div class="flex my-4 justify-center flex-wrap">
            <Card v-for="repository in repositories" :repository="repository" />
        </div>

        <Footer />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './Header.vue';
import Footer from './Footer.vue';
import Card from './Card.vue';

@Component({  
    components: { Header, Footer, Card }
})
export default class Content extends Vue
{
    private repositories: [] = [];

    components()
    {
        return {
            Header
        };
    }

    mounted()
    {
        this.getRepositories();
    }

    async getRepositories()
    {
        await this.$http.get('https://api.github.com/users/AstroCorp/repos').then((res) => {
            this.repositories = res.data.map((repo: any) => {
                return {
                    name: repo.name,
                    html_url: repo.html_url,
                    description: repo.description,
                    tags_url: repo.tags_url,
                }
            });
        });
    }
}
</script>

<style scoped lang="scss">

</style>
