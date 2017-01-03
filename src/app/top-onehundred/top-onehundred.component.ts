import { Component, OnInit } from '@angular/core';
import { TopOneHundredService } from './top-onehundred.service'

@Component({
    templateUrl: './top-onehundred.component.html',
    providers: [TopOneHundredService]
})
export class TopOneHundredComponent implements OnInit {
    private topArticles: any[];

    constructor(private topOneHundredservice: TopOneHundredService) {
        this.topArticles = [];
    }

    getTopArticles(){
        return this.topOneHundredservice.getTopOneHundredArticles()
            .subscribe(articles=>{
                this.topArticles=articles;
            });
    }
    
    ngOnInit() {
        this.getTopArticles();
    }
}