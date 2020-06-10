<template>
    <div class="flex flex-col min-h-screen">
        <Header @search="search = $event" />
        
        <div class="mt-2 mb-4 flex-grow" :key="search.length">
            <paginate
                name="repositories"
                class="flex justify-center flex-wrap"
                :list="searchRepositories"
                :per="10"
            >
                <Card v-for="(repository, index) in paginated('repositories')" :key="index" :repository="repository" />
            </paginate>

            <paginate-links
                class="flex justify-center mt-4"
                for="repositories"
                :show-step-links="true"
                :hide-single-page="true"
                :limit="4"
                :step-links="{
                    next: '❯',
                    prev: '❮',
                }"
            />
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
    public search: string = '';
    private repositories: [] = [];
    private paginate: string[] = ['repositories'];

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

    get searchRepositories()
    {
        return this.repositories.filter((repository: any) => {
            const search = this.search.toLowerCase();
            return this.search.length === 0 || repository.name.toLowerCase().includes(search) || repository.description.toLowerCase().includes(search);
        });
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

<style lang="scss">

.paginate-links {
    @apply .select-none;
  
    .number.active a {
        @apply .bg-pink-600 .text-white;
    }
  
    .disabled a {
        @apply .cursor-not-allowed .text-gray-400;
    }

    .left-arrow a, .right-arrow a {
        @apply .mx-2 .h-12 .w-12 .flex .justify-center .items-center .rounded-full .bg-gray-200 .cursor-pointer;
    }
    
    .number, .ellipses {
        @apply .bg-gray-200;

        a {
            @apply .h-12 .w-12 .flex .justify-center .items-center .font-bold .rounded-full .bg-gray-200 .cursor-pointer;
        }
    }
    
    .number:nth-child(2) {
        @apply .rounded-l-full;
    }
    
    .number:nth-last-child(2) {
        @apply .rounded-r-full;
    }

    li:not(.disabled):not(.active) a {
        @apply .duration-300 .transition-all;

        &:hover {
            @apply .bg-gray-400;
        }
    }
}
</style>
