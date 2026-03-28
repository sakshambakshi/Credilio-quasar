<template>
  <q-layout view="lHh Lpr lFf">
    <CustomHeader />



    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import CustomHeader from 'src/components/CustomHeader.vue';
import { useNews, isDataLoaded, ALL_NEWS } from 'src/composition/news.composition';
import { onMounted, watch } from 'vue';
import { ELoadingStatus } from 'src/models/models';
import { useQuasar } from 'quasar';
const { fetchNews } = useNews()
const $q = useQuasar()
watch(ALL_NEWS, function () {
  if (ALL_NEWS.status === ELoadingStatus.LOADING) {
    $q.loading.show()
  } else {
    $q.loading.hide()
  }
})

onMounted(async function () {
  if (!isDataLoaded.value) {
    await fetchNews()

  }
})



</script>
