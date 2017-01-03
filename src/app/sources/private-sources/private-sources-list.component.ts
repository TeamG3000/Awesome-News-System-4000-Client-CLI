import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { SourcesService } from '../sources.service';
import { AuthenticationService } from '../../core/services/authentication.service';
import { UserService } from '../../core/services/user.service';
import { Source } from '../../core/models/source-model';
import { User } from '../../core/models/user-model';

@Component({
    templateUrl: './private-sources-list.component.html',
    styleUrls: ['./private-sources-list.component.css']
})
export class PrivateSoursesListComponent implements OnInit {
    private sources: Source[];
    private user: User;
    private selectedMediaItem: any;
    private selectedMediaList: any[] = [];
    private successMessage: string = 'Yay! You have saved your prefered media sources successfully.'

    constructor(
        private sourcesService: SourcesService,
        private userService: UserService,
        private authenthicationService: AuthenticationService,
        public toastr: ToastsManager
    ) {
        this.user = JSON.parse(this.authenthicationService.checkIfUserIsLoggedIn()).user;
    }

    @Output('onSortChange') sortedMediaSourcesEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output('onOrderChange') orderedMediaSourcesEmitter: EventEmitter<string> = new EventEmitter<string>();


    onSortChange(source: string) {
        this.sortedMediaSourcesEmitter.emit(source);
    }

    onOrderChange(source: string) {
        this.orderedMediaSourcesEmitter.emit(source);
    }

    getSources() {
        return this.sourcesService.getSources()
            .subscribe(
            sources => {
                this.sources = sources;
            },
            err => console.error(err));
    }


    onClicked(source: Source, event: any) {
        let index = this.selectedMediaList.indexOf(event.target.value);

        if (event.target.checked && index < 0) {
            this.selectedMediaList.push(event.target.value);
        }

        if (!event.target.checked && index > -1) {
            this.selectedMediaList.splice(index, 1);
        }

        this.user.selectedMedia = [];
        for (let i = 0; i < this.selectedMediaList.length; i++) {
            for (let j = 0; j < this.sources.length; j++) {
                if (this.sources[j].name === this.selectedMediaList[i]) {
                    this.user.selectedMedia.push(this.sources[j].id);
                }
            }
        }
    }

    updateUserWithSelectedSources(): void {
        this.userService.updateSelectedMediaSources(this.user).subscribe(response => {
            let updatedUser = JSON.parse(this.authenthicationService.checkIfUserIsLoggedIn()).user;
            updatedUser.selectedMedia = [];
            this.selectedMediaList.forEach(media => {
                for (let j = 0; j < this.sources.length; j++) {
                    if (this.sources[j].name === media) {
                        updatedUser.selectedMedia.push({
                            name: this.sources[j].id
                        });
                    }
                }
            });

            localStorage.removeItem('currentUser');
            localStorage.setItem('currentUser', JSON.stringify({ user: updatedUser }));
        });
    }

    ngOnInit() {
        this.getSources();
    }

    showSuccess() {
        this.toastr.success(this.successMessage);
    }
}