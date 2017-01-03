import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service'


@Component({
	templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
	private searchedArticles: any[];
	private phrase: string;
	private isEmpty: boolean;
	constructor(private searchService: SearchService) {
		this.searchedArticles = [];
	}

	public search(searchPhares: string) {
		this.phrase = searchPhares;
		this.searchService.getSearchedArticles(searchPhares)
			.subscribe(
			articles => {
				this.searchedArticles = articles.articles;
				this.isEmpty = this.searchedArticles.length === 0;
			},
			err => console.error(err));
	}
	ngOnInit() {
		this.search(localStorage.getItem("searchPhrase"));
		localStorage.removeItem("searchPhrase");
	}

}