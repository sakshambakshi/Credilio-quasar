<script lang="ts" setup>
import { currentPage, newsTextSearch, showSearch } from 'src/composition/news.composition';


</script>


<template>
    <q-slide-transition>
        <div v-show="showSearch" class="row justify-center q-mb-xl q-mt-md">
            <div class="col-12 col-md-8 col-lg-6">
                <q-input v-model="newsTextSearch" outlined rounded clearable autofocus bg-color="white"
                    placeholder="Search news by title or content..." @clear="currentPage = 1"
                    @update:model-value="currentPage = 1">
                    <template v-slot:prepend>
                        <q-icon name="search" />
                    </template>
                </q-input>
            </div>
        </div>
    </q-slide-transition>
</template>