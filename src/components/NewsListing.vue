<script setup lang="ts">
import { useNews } from 'src/composition/news.composition';
import NewsCard from './NewsCard.vue';

const { currentPageNews } = useNews()
</script>

<template>
    <div class="q-pa-md">
        <div class="row q-col-gutter-md">
            <div v-for="news in currentPageNews" :key="news.newsId" class="col-12 col-sm-6 col-md-4 col-lg-3">
                <NewsCard :news="news" />
            </div>
        </div>
    </div>
</template>