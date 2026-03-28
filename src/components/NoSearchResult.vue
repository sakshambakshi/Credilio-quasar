<script setup lang="ts">
import { newsTextSearch, useNews } from "src/composition/news.composition";

const { isSearchResultUnavailable } = useNews();



</script>


<template>
    <div v-if="isSearchResultUnavailable" class="text-center q-pa-xl">
        <q-icon name="search_off" size="100px" color="grey-5" />
        <div class="text-h5 text-grey-7 q-mt-md">No articles found matching "{{ newsTextSearch }}"</div>
    </div>
</template>