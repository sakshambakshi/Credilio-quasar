<script setup lang="ts">
import { useRouter } from 'vue-router';
import { onMounted, ref } from "vue"
import type { INews } from 'src/models/models';
import { formatDate, useNews } from 'src/composition/news.composition';
const selectedNews = ref<{ news: INews | null, isLoaded: boolean }>({ news: null, isLoaded: false });

const router = useRouter()
const { fetchDetailNewsId } = useNews()
onMounted(async function () {

    selectedNews.value.news = await fetchDetailNewsId();
    selectedNews.value.isLoaded = true;
})

function goBack() {
    router.back()
}

</script>
<template>

    <q-page padding v-if="selectedNews.isLoaded" class="bg-white">
        <div class="detail-container q-py-lg">

            <!-- Category / Source Tag -->
            <q-chip color="indigo-1" text-color="indigo-9" icon="newspaper" class="q-mb-md text-weight-medium">
                {{ selectedNews.news!.source.name }}
            </q-chip>

            <!-- Title -->
            <div class="text-h3 text-weight-bold q-mb-md line-height-tight" style="line-height: 1.2;">
                {{ selectedNews.news!.title }}
            </div>

            <!-- Meta Information -->
            <div class="row items-center text-grey-8 q-mb-lg q-gutter-x-md text-subtitle1">
                <div class="flex items-center"><q-icon name="person" class="q-mr-xs" size="sm" /> {{
                    selectedNews.news!.author
                    || 'Verge Staff' }}</div>
                <div>&bull;</div>
                <div class="flex items-center"><q-icon name="event" class="q-mr-xs" size="sm" /> {{
                    formatDate(selectedNews.news!.publishedAt) }}</div>
            </div>

            <!-- Main Image -->
            <q-img :src="selectedNews.news!.urlToImage" class="rounded-borders q-mb-xl shadow-4"
                style="max-height: 500px;" fit="cover" />

            <!-- Content Area -->
            <div class="text-body1 text-grey-9 q-mb-xl" style="font-size: 1.15rem; line-height: 1.8;">
                <!-- Normally v-html is used here if content is rich text, but using description + content for demo -->
                <p class="text-weight-medium text-h6 q-mb-lg">{{ selectedNews.news!.description }}</p>

                <div class="q-pl-md" style="border-left: 4px solid #3f51b5;">
                    {{ selectedNews.news!.content.replace(/<[^>]*>?/gm, '') }}
                        <!-- Strip HTML tags from schema for clean display -->
                </div>
            </div>

            <q-separator class="q-my-lg" />

            <!-- Call to Action -->
            <div class="row justify-between items-center q-pb-xl">
                <q-btn flat color="indigo" icon="arrow_back" label="Back to News" @click="goBack" />
                <q-btn color="indigo-9" icon-right="open_in_new" label="Read Original Article" type="a"
                    :href="selectedNews.news!.url" target="_blank" unelevated class="q-px-lg shadow-2" />
            </div>
        </div>
    </q-page>
</template>
