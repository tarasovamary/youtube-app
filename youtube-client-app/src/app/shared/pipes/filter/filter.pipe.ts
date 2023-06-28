import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItemFeModel } from '../../../core/index';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(searchResultArray: ISearchItemFeModel[], filterValue: string): ISearchItemFeModel[] {
    return filterValue ? searchResultArray.filter(
      (searchItem: ISearchItemFeModel) => this.getTransformString(searchItem.title).includes(this.getTransformString(filterValue))
      ) : searchResultArray;
  }

  getTransformString(filterValue: string) {
    return filterValue.trim().toLowerCase();
  }

}
