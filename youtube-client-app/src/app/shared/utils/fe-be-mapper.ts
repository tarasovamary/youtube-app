import { ISearchItem, ISearchItemFeModel } from "../../core/index";

export function convertBEtoFEModel(item: ISearchItem): ISearchItemFeModel {
  return {
    id: item.id,
    title: item.snippet.localized.title,
    description: item.snippet.localized.description,
    thumbnailUrlMedium: item.snippet.thumbnails.medium.url,
    thumbnailUrlHigh: item.snippet.thumbnails.high.url,
    publishedAt: item.snippet.publishedAt,
    viewCount: item.statistics?.viewCount || '0',
    likeCount: item.statistics?.likeCount || '0',
    commentCount: item.statistics?.commentCount || '0'
  };
}