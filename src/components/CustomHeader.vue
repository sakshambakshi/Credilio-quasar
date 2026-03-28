<script setup lang="ts">
import { totalNewsCount, showSearch } from 'src/composition/news.composition';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const isNewsSelected = computed(() => route.name === "NewsSelectedPage")



defineOptions({
    name: "CustomHeader"
})
const goBack = () => router.back();
</script>

<template>

    <q-header elevated class="bg-indigo-9 text-white">
        <q-toolbar>
            <!-- Back button only shows if a news article is selected -->
            <q-btn v-if="isNewsSelected" flat round dense icon="arrow_back" @click="goBack" class="q-mr-sm"></q-btn>

            <q-avatar v-if="!isNewsSelected">
                <q-icon name="article" size="md" />
            </q-avatar>

            <q-toolbar-title>
                News Listing
            </q-toolbar-title>

            <q-space></q-space>

            <div class="text-subtitle2 q-mr-md" v-if="!isNewsSelected">
                Total Articles: {{ totalNewsCount }}
            </div>

            <!-- New Search Toggle Button -->
            <q-btn v-if="!isNewsSelected" flat round dense icon="search" @click="showSearch = !showSearch"
                :color="showSearch ? 'blue-3' : 'white'">
                <q-tooltip>Toggle Search</q-tooltip>
            </q-btn>
        </q-toolbar>
    </q-header>
</template>