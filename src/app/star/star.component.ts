import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'star-rating',
    templateUrl: './star.component.html',
    styles: [
        `.crop {
            overflow: hidden;
        }`,
        `div {
            cursor: pointer;
        }`
    ]
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = (this.rating / 5) * 86;
    }
}
