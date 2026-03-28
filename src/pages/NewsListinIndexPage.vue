<script setup lang="ts">
import { isDataLoaded, showSearch, useNews } from 'src/composition/news.composition';
import NoSearchResult from 'src/components/NoSearchResult.vue';
import NewsListing from 'src/components/NewsListing.vue';
import NewsListingPagination from 'src/components/NewsListingPagination.vue';
import NewsSearch from 'src/components/NewsSearch.vue';


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
