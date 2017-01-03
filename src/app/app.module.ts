import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { AppRoutingModule } from './core/routes/app-routing.module';

import { AppComponent } from './app.component';
import { SimpleArticleComponent } from './simple-article/simple-article.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PublicSoursesListComponent } from './sources/public-sources/public-sources-list.component';
import { PrivateSoursesListComponent } from './sources/private-sources/private-sources-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { TopOneHundredComponent } from './top-onehundred/top-onehundred.component';
import { SourceDetailsComponent } from './sources/private-sources/private-source-details.component';
import { StarComponent } from './star/star.component';
import { FavouriteArticlesComponent } from './favourite-articles/favourite-articles.component';

import { AuthenticationService } from '../app/core/services/authentication.service';
import { UserService } from '../app/core/services/user.service';
import { SourcesService } from './sources/sources.service';
import { SearchService } from './search/search.service';
import { UserGuardService } from './core/guards/user-guard.service';
import { ErrorHandler } from './core/errorHandler';

import { CollapseDirective } from './core/directives/collapse.directive';
import { CapitalizeFirstLetterPipe } from './core/pipes/capitalize-first-letter.pipe';
import { SortSourcesPipe } from './core/pipes/sort.pipe';
import { FavouritesFilterByTitle } from './core/pipes/favourites-filter.pipe';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		AppRoutingModule,
		ToastModule
	],

	declarations: [
		AppComponent,
		SimpleArticleComponent,
		ArticleDetailsComponent,
		AboutComponent,
		LoginComponent,
		RegisterComponent,
		SearchComponent,
		NavbarComponent,
		FooterComponent,
		UserProfileComponent,
		PublicSoursesListComponent,
		PrivateSoursesListComponent,
		StarComponent,
		TopOneHundredComponent,
		SourceDetailsComponent,
		FavouriteArticlesComponent,

		CollapseDirective,
		CapitalizeFirstLetterPipe,
		SortSourcesPipe,
		FavouritesFilterByTitle
	],

	providers: [
		AuthenticationService,
		UserService,
		SearchService,
		SourcesService,
		UserGuardService,
		ErrorHandler
	],

	bootstrap: [AppComponent]

})
export class AppModule { }
