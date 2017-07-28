import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lastname'
})
export class LastnamePipe implements PipeTransform {
  transform(categories: any, searchText: any): any {
    if(searchText == null) return categories;
    return categories.filter(function(category){
      return category.lastname.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}