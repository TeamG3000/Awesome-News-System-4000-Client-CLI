import { Component, OnInit, trigger, state, style, transition, animate, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ArticleDetailsModel } from '../../app/core/models/article-details.model';
import { ArticleDetailsService } from './article-details.service';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
    templateUrl: './article-details.component.html',
    providers: [
        ArticleDetailsService
    ],
    animations: [
        trigger('ratingState', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(525)
            ])
        ]),
        trigger('favouritesState', [
            state('in', style({ transform: 'translateY(0)' })),
            transition('void => *', [
                style({ transform: 'translateY(-100%)' }),
                animate(525)
            ])
        ]),
        trigger('commentState', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(-100%)' }),
                animate(525)
            ])
        ]),
    ]
})
export class ArticleDetailsComponent implements OnInit {
    article: ArticleDetailsModel;
    articleRatingToAdd: number;
    articleCommentToAdd: string;
    isAddedToFavourites: boolean = false;
    isRatingAdded: boolean = false;
    private user: any;
    userExists: boolean = false;

    constructor(private _service: ArticleDetailsService,
        private _authenticationService: AuthenticationService,
        private _route: ActivatedRoute,
        public toastr: ToastsManager) {
    }
    ngOnInit() {
        this.getArticleDetails(this._route.snapshot.params['id']);
        this.isUserLogged();
    }
    isUserLogged() {
        let userLocalStorage = this._authenticationService.checkIfUserIsLoggedIn();
        if (userLocalStorage !== null) {
            this.user = JSON.parse(userLocalStorage).user;
            this.userExists = true;
        }
    }
    onSubmitRating() {
        this._service.addRatingToArticle(this.article._id, this.articleRatingToAdd)
            .subscribe(response => {
                this.article.rating = response.article.rating;
                this.isRatingAdded = true;
                this.toastr.success('Rating successfully submited!');
            });
    }
    onAddToFavourites() {
        if (!this.isAlreadyInFavourites()) {
            this._service.addArticleToFavourites(this.article._id, this.user, this._route.snapshot.params['id'])
                .subscribe(response => {
                    this.isAddedToFavourites = true;
                    let updatedUser = JSON.parse(this._authenticationService.checkIfUserIsLoggedIn()).user;
                    updatedUser.favouriteArticles.push({
                        _id: this.article._id,
                        imageUrl: this.article.imageUrl,
                        originalId: this._route.snapshot.params['id'],
                        publishedAt: this.article.publishedAt,
                        source: this.article.source,
                        title: this.article.title
                    });
                    localStorage.removeItem('currentUser');
                    localStorage.setItem('currentUser', JSON.stringify({ user: updatedUser }));
                    this.toastr.success('Article added to favourites list!');
                }, error => {
                    this.toastr.error('Article already in favourites.');
                });
        } else {
            this.toastr.error('Article is already in favourites.');
        }
    }
    onAddCommentToArticle() {
        this._service.addCommentToArticle(this.articleCommentToAdd, this.article._id, this.user).subscribe(
            item => {
                this.article.comments = item.comments;
                this.toastr.success('Comment added successfully!');
            });
    }
    private getArticleDetails(id: string) {
        this._service.getArticle(id).subscribe(
            data => this.article = data.result
        );
    }
    private isAlreadyInFavourites(): boolean {
        let currentId = this._route.snapshot.params['id'];
        let userLocalStorage = JSON.parse(this._authenticationService.checkIfUserIsLoggedIn()).user;

        for (let i = 0; i < userLocalStorage.favouriteArticles.length; i++) {
            if (currentId === userLocalStorage.favouriteArticles[i].originalId) {
                return true;
            }
        }

        return false;
    }
}
