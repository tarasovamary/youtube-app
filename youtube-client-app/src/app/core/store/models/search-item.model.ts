type ThumbnailsSize= "default"|"medium"|"high"|"standard"|"maxres";

interface ISearchThumbnail {
  url: string,
  width: number,
  height: number
}

interface ISearchItemSnippet {
  publishedAt: string,
  channelId: string,
  title: string,
  description: string,
  thumbnails: {
    [T in ThumbnailsSize]: ISearchThumbnail;
  }
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: {
    title: string,
    description: string,
  }
  defaultAudioLanguage: string
}

interface ISearchItemStatistics {
  viewCount: string,
  likeCount: string,
  favoriteCount: string,
  commentCount: string,
}

export interface ISearchItem {
  kind: string,
  etag: string,
  id: string,
  snippet: ISearchItemSnippet,
  statistics: ISearchItemStatistics,
}