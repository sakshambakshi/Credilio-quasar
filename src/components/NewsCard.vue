<script lang="ts" setup>

import { formatDate } from 'src/composition/news.composition';
import type { INews } from 'src/models/models';
import { computed } from "vue"
import { useRouter } from 'vue-router';
const props = defineProps<{ news: INews }>();

const newsDataFormated = computed(() => ({
    imageUrl: props.news.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image',
    sourceName: props.news.source.name || '',
    formatPublishedAt: formatDate(props.news.publishedAt),
    authorName: props.news.author || 'Unknown',
    title: props.news.title.trim(),
    description: props.news.description.trim()
}))

const router = useRouter()
async function viewDetails() {
    try {
        // Await the promise
        await router.push({
            name: "NewsSelectedPage",
            params: { id: props.news.newsId }
        });
    } catch (err) {
        // Handle navigation errors (optional but good practice)
        console.error("Navigation failed:", err);
    }
}
</script>

<template>
    <q-card class="news-card cursor-pointer full-height shadow-2" v-ripple @click="viewDetails">
        <q-img :src="newsDataFormated.imageUrl" :ratio="16 / 9" class="rounded-borders">
            <template v-slot:loading>
                <q-spinner-dots color="white" />
            </template>
            <div class="absolute-bottom-right bg-black-2 text-subtitle2" style="padding: 4px 8px;">
                {{ newsDataFormated.sourceName }}
            </div>
        </q-img>

        <q-card-section class="card-content-wrapper q-pa-md">
            <div class="text-caption text-grey-7 q-mb-xs row justify-between items-center">
                <span>{{ newsDataFormated.formatPublishedAt }}</span>
                <span class="row items-center">
                    <q-icon name="person" size="xs" class="q-mr-xs" />
                    {{ newsDataFormated.authorName }}
                </span>
            </div>

            <div class="text-h6 text-weight-bold text-truncate-2 q-mb-sm" :title="news.title">
                {{ newsDataFormated.title }}
            </div>

            <div class="text-body2 text-grey-8 text-truncate-3 card-description">
                {{ newsDataFormated.description }}
            </div>
        </q-card-section>
    </q-card>
</template>