<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { isDataLoaded, showSearch, useNews } from 'src/composition/news.composition';

const NoSearchResult = defineAsyncComponent(() => import('src/components/NoSearchResult.vue'));
const NewsListing = defineAsyncComponent(() => import('src/components/NewsListing.vue'));
const NewsListingPagination = defineAsyncComponent(() => import('src/components/NewsListingPagination.vue'));
const NewsSearch = defineAsyncComponent(() => import('src/components/NewsSearch.vue'));

const { isSearchResultUnavailable } = useNews()


</script>


<template>

    <NewsSearch v-if="showSearch" />
    <template v-if="isDataLoaded">
        <template v-if="isSearchResultUnavailable">
            <NoSearchResult />
        </template>

        <template v-else>

            <NewsListing />

            <NewsListingPagination />
        </template>

    </template>

</template>
