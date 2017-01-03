import { Component } from '@angular/core';

@Component({
	templateUrl: './about.component.html'
})
export class AboutComponent {
	logoPath: string = '../about/logo.png';
	members: any[] = [{
		name: 'Bozhidar Boevski',
		link: 'https://telerikacademy.com/Users/Jeriko'
	},
	{
		name: 'Martin Yordanov',
		link: 'https://telerikacademy.com/Users/mojojojo'
	},
	{
		name: 'Milena Stancheva',
		link: 'https://telerikacademy.com/Users/Milenkata'
	}];
	additionalInformationLinks: any[] = [{
		name: 'Telerik Academy',
		link: 'https://telerikacademy.com'
	},
	{
		name: 'Github',
		link: 'https://github.com/TeamG3000'
	},
	{
		name: 'News Api',
		link: 'https://newsapi.org'
	}]
}
