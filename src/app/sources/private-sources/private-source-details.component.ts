import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SourcesService } from '../sources.service';
import { Source } from '../../core/models/source-model';

@Component({
    templateUrl: './private-source-details.component.html'
})
export class SourceDetailsComponent implements OnInit {
    private source: Source;

    constructor(private sourcesService: SourcesService, private route: ActivatedRoute) { }

    getSourceById(id: string){
        this.sourcesService.getSourceById(id).subscribe(
            source => {
                this.source = source;
            }
        );
    }

    ngOnInit() {
        this.getSourceById(this.route.snapshot.params['id']);
    }
}