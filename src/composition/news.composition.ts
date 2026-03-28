import { shallowReactive, computed, ref } from 'vue';
// import { useNewsStore } from '../stores/news.store';
import { date } from 'quasar';

import { useRoute } from 'vue-router';
import type { INews } from 'src/models/models';
import { ELoadingStatus } from 'src/models/models';
export const ALL_NEWS = shallowReactive({
  fetchedAt: null,
  news: [],
  errorAtFetchingNews: false,
  status: ELoadingStatus.NOT_LOADED,
});

export const formatDate = (dateString: string) => {
  return date.formatDate(dateString, 'MMM DD, YYYY');
};
export const isDataLoaded = computed(
  () => ALL_NEWS.status === ELoadingStatus.LOADED && ALL_NEWS.news.length > 0,
);
export const currentPage = ref(0);
export const totalNewsCount = computed(() => ALL_NEWS.news.length);
export const newsLimitPerPage = ref(10);
export const newsTextSearch = ref('');

export const showSearch = ref(false);
export function useNews() {
  const isSearchResultUnavailable = computed(function () {
    const isItemSearched = newsTextSearch.value.trim().length > 0;
    if (isItemSearched) {
      return displayedTotalNews.value.length === 0;
    }

    return false;
  });

  const totalPagesCount = computed(() => {
    if (displayedTotalNews.value.length > 0) {
      return displayedTotalNews.value.length / newsLimitPerPage.value;
    }

    return 0;
  });

  async function fetchNews() {
    // should be available for retries
    try {
      ALL_NEWS.status = ELoadingStatus.LOADING;
      const results = await fetch(
        `https://newsapi.org/v2/everything?q=keyword&apiKey=${process.env.API_TOKEN}`,
      );

      const data = await results.json();

      ALL_NEWS.news = data.articles.map((x: INews, id: number) => ({
        ...x,
        newsId: `${id}_${x.title.split(' ')[0]}`,
      }));

      ALL_NEWS.status = ELoadingStatus.LOADED;
    } catch (err: unknown) {
      if (err instanceof Error) {
        ALL_NEWS.status = ELoadingStatus.NOT_LOADED;
        console.log('Error at Fetching the news ');

        ALL_NEWS.errorAtFetchingNews = true; // can be used to show the news unavailbale message when needed
      }
    }
  }

  async function fetchDetailNewsId(): Promise<INews | null> {
    // const route = useRoute()
    // const urlNewsId = +route.params.newsId
    const route = useRoute();
    const newsId = route.params.id;
    if (!isDataLoaded.value) {
      await fetchNews();
    }
    const newsFiltered = ALL_NEWS.news.filter((news: INews) => news.newsId === newsId) as INews[];
    debugger;
    if (newsFiltered.length >= 0) return newsFiltered[0]!;

    return null;
  }
  const displayedTotalNews = computed<INews[]>(() => {
    if (isDataLoaded.value) {
      if (newsTextSearch.value.trim().length === 0) return ALL_NEWS.news;

      return ALL_NEWS.news.filter((newsObj: INews) =>
        newsObj?.content?.includes(newsTextSearch.value),
      );
    }

    return [];
  });

  const currentPageNewsIndex = computed<number[]>(() => {
    const initialIndex = currentPage.value - 1 < 0 ? 0 : currentPage.value - 1;
    const startIndex = initialIndex * newsLimitPerPage.value;
    const lastIndex = startIndex + newsLimitPerPage.value;
    return [startIndex, lastIndex];
  });
  const currentPageNews = computed<INews[]>(() => {
    const allNews = displayedTotalNews.value;
    const [startIndex, lastIndex] = currentPageNewsIndex.value;
    console.log({
      currentPage: currentPage.value,
      startIndex,
      lastIndex,
      allNews,
    });
    return allNews.slice(startIndex, lastIndex);
  });

  return {
    fetchNews,
    totalPagesCount,
    displayedTotalNews,
    currentPageNews,
    newsTextSearch,
    totalNewsCount,
    fetchDetailNewsId,
    isSearchResultUnavailable,
    currentPageNewsIndex,
  };
}

