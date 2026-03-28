export interface INews {
  newsId: string;
  source: {
    id: null;
    name: string;
  };
  name: string;
  description: string;
  author: string;
  content: string;
  publishedAt: string;
  urlToImage: string;
  url: string;
  title: string;
}
export enum ELoadingStatus {
  NOT_LOADED,
  LOADING,
  LOADED,
}
