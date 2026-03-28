<script lang="ts" setup>
import { currentPage, useNews } from 'src/composition/news.composition';


const { totalPagesCount } = useNews()

</script>

<template>
    <div class="row justify-center q-mt-xl q-mb-md" v-if="totalPagesCount > 1">
        <q-pagination v-model="currentPage" :max="totalPagesCount" :max-pages="6" boundary-numbers direction-links
            color="indigo-9" active-color="indigo" active-text-color="white" size="16px" />
    </div>
</template>