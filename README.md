# Awesome News System 4000
This project has been developed as part of the Angular 2 course in Telerik Academy 

## Project aim
The aim of the project is to give our users the latest news from many sources as soon as they are published. Users can filter the media they prefer and receive information from the sources they prefer.

## Project information
The project consists of two parts - client and server. The server was not in the requirements for the course, but it was developed for a previous one. A slightly update version of the server has been used for this project. You can find it here : [https://github.com/TeamG3000/Awesome-News-System-4000-Server](https://github.com/TeamG3000/Awesome-News-System-4000-Server). 

The client is the main part of the project. You can find a live demo here : [http://awesomenews4000.herokuapp.com](http://awesomenews4000.herokuapp.com)

## Users
#### Normal access 
#### Registered - options to leave a comment, rate it, like the article and read it later and filter articles by source

## Routes
#### Normal access
/home -> every user regardless if they are registered or not can view the latest news from all our sources in convenient form;

/article-details -> displays detailed information about the given article. If user is logged in, he/she has the option to add the article to their favourite articles, to comment and to rate them 

/search -> displays the results of the search query based on the user input

/about -> displays information about the developers

/top100 -> displays the 100 articles with highest rating 

/sources -> displays all the news websites that we are gathering articles from

/register -> displays a form with which a user can register

/login -> gives the functionality to the registered users to log in


#### Registered users
/user/profile -> displays user profile and gives access to the theme settings

/favourite-articles -> displays the articles the user has liked, also a user can filter them by title

/select-media -> gives the ability to filter the displayed information about media source 
## Team Members 
#### [Milena Stancheva](https://github.com/MilStancheva)
#### [Bozhidar Boevski](https://github.com/kjifw)
#### [Martin Jordanov](https://github.com/mkjordanov) 

## Project Dependencies
#### Angular 2
#### Webpack
#### Bootstrap
#### Toaster

## How to use locally
* Clone or download
* Run ```npm install``` in the root directory
* Run ```npm start``` to start the project locally
* Connect to localhost:3000 to see the magic at work :)