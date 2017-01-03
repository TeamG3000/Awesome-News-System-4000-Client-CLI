import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'favouritesFilterByTitle'
})
export class FavouritesFilterByTitle implements PipeTransform {
    transform(value: any[], filterBy: string): any[] {
        if (filterBy) {
            filterBy = filterBy.toLocaleLowerCase();
            return value
                .filter(article => {
                    let result = article.title.toLocaleLowerCase().indexOf(filterBy) !== -1;
                    return result;
                });
        } else {
            filterBy = null;
            return value;
        }
    }
}
