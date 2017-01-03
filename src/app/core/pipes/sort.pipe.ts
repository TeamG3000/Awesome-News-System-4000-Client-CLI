import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort'
})

export class SortSourcesPipe implements PipeTransform {

    sortAsc(x: any, y: any) {
        if (x > y) {
            return 1;
        }
        if (x < y) {
            return -1;
        }
        return 0;
    }

    sortDesc(x: any, y: any) {
        if (x > y) {
            return -1;
        }
        if (x < y) {
            return 1;
        }
        return 0;
    }

    transform(items: any[], [sort, order]: any[]) {
        let isAsc = 'Asc';
        let isDesc = 'Desc';

        if (items == null) {
            return null;
        }

        let compareFunc;

        if (order === isAsc) {
            compareFunc = this.sortAsc;
        }
        else {
            compareFunc = this.sortDesc;
        }

        if (sort) {
            if (order === isDesc) {
                return items.sort((x: any, y: any) => {
                    return this.sortDesc(x[sort], y[sort]);
                });
            }
            else {
                return items.sort((x: any, y: any) => {
                    return this.sortAsc(x[sort], y[sort]);
                });
            }
        }
        else {
            return items.sort(compareFunc);
        }
    }
}