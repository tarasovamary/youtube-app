import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItemFeModel } from '../../../core/index';

enum SortingValues {
  date = 'date',
  viewCount = 'viewCount'
}

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(searchResultArray: ISearchItemFeModel[], sortState: boolean, sortByValue: string): ISearchItemFeModel[] {
    
    const getSortValue = (sortByValue === SortingValues.date)
    ? this.getDateValue
    : this.getViewCountValue;

    let sortingArray:ISearchItemFeModel[] = [];

    if(searchResultArray) {
      sortingArray = searchResultArray.sort((a: ISearchItemFeModel, b: ISearchItemFeModel) => 
      this.setSortingOrder(getSortValue(a), getSortValue(b), sortState)) ;
    }
    
    return sortingArray;
  }

  setSortingOrder(a: number, b: number, sortOrder: boolean) {
    if(sortOrder) {
      return a - b;
    }
      return b - a;
  }

  getDateValue(item: ISearchItemFeModel): number {
    const date = item.publishedAt;
    return new Date(date).getTime();
  }

  getViewCountValue(item: ISearchItemFeModel): number {
    return Number(item.viewCount);
  }

}
