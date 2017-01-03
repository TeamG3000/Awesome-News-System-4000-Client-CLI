import { Component, OnInit } from '@angular/core';

import { SourcesService } from '../sources.service';
import {Source} from '../../core/models/source-model';

@Component({
    templateUrl: './public-sources-list.component.html',
    styleUrls: ['./public-sources.component.css']
})
export class PublicSoursesListComponent implements OnInit {
    private sources: Source[];

    constructor(private sourcesService: SourcesService) { }

    getSources(){
        return this.sourcesService.getSources()
            .subscribe(
            sources => {
                this.sources = sources;
            },
            err => console.error(err));
    }

    ngOnInit() { 
        this.getSources();
    }
}