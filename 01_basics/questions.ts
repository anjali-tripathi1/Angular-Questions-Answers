 

// Angular =>
// Angular is one of the most popular javascript framework for builiding clientside applications.
// and it provides lots of reuseble code like predefine methods, classes, interfaces etc. which we can use 
// to create dyanamic clientside applications. genrally we use angular for creating singlepage applications.


//   Qu. What is Angular ?
//   Ans. Angular is a development platform for builiding a single-page application for mobile and desktop. It is used for clientside applications like HTML, CSS and a programing language like Javascript or Typescript. Angular is not a programing language  in itself like javascript. Insted it's a framework which uses programing language like Javascript or Typescript.

// so we can say that Angular is a Javascript Framework which allows us to create Single Page Applications(SPA) .

// => Angular is a Javascript Framework it's not a programing language.
// => We use angular for creating Single Page Applications (SPA).


//  Qu. What is Framework ?
//  Ans. A Framework is like a platform for developing software applications. A Framework can have predefine classes and fuctions that can be re-used to perform and add several fuctionalities, which otherwise we would have to write from scratch by our own.

// In Simple Words
// A Framework is a collection of all pre-defined classes which provides APIs for performing diffrent operations when used in Application and angular is one such framework it provides classes and methods which we can re-use in our application insted of writing them from scratch. 


//  Qu. What is Single Page Application ?
//  Ans. A single page appication is a web application, which has only one HTML page. when we navigate around, only the content of that HTML page changes. The page itself never change. and also the content is changed by javascript dynamically .

//  Qu. What is the advantage of using a single page application and why do we want create a single page application in first place ?

//  Ans. advantages of SPA
//  Since we are using Javascript to change the content of the page because of this loading a new HTML content is much faster because here we are not reaching out to the server to request a new piece of HTML data, everytime we navigate to a diffrent URL and this approach allow us to create an application which is very fast  reactive just like a mobile application.

// =>  if you need some data from the server you can loaded in the background without making the webpage unresponsive. and once the data is loaded you can displayed that data in your application. so a single page application is quite fast and reactive because we are not requesting HTML data from the server everytime we are navigating around instead behind the scences javascript takes care of randering the appropriate ui based on the resource which we have requested for. and this makes SPA quite fast and reactive.



//  why choose Angular 
//  Limitations of javascript or jquery
//  Qu. why you might want to use angular for your next web application project.
//  Ans. we might say that all these things are also possible with playing javascript and or jQuery then why we need a completely new framework like angular for this. well we can certainly use javascript or jQuery to do the same thing which we do with angular but if we use javascript or jQuery as the application grows the appication gets more and more complex and vanilla javascript or jquery code becomes hard to maintain and we will need a way to properly structure our application a lot of applications built using vanilla javascript or jquery is hard to test. also there are some fuctionalities which we have to write from scratch when using javascript or jquery and this is the reason over past few years various frameworks have been built and evolve to make web development easier. and angular is an example of one such framework.


//  => Advantages of using angular
//   There are several benefits of using angular framework for developing applications instead of using vanilla javascript or jquery .
//   Angular gives our application a clean and loosely coupled structure that is easy to understand and easy to maintain. it also brings a lot of utility code which we can re-used in a lot of applications, Especially when dealing with user navigation and browser history. Applications built with angular are most testable we can easily write automated tests to test various parts of a angular application.

  // => so over past few years there are several versions of angular that has been released. so let's know what are these versions and how they are diffrent ?

  // => Versions of angular 
  // It all started in october 2010  when the first version of angular is released and it was called angular JS this version of angular is completely diffrent from the angular we use today. Angular JS was created as a 
  // javascript framework for builiding client applications soon it gained popularity and it was by far the most popular javascript framework availble for creating web applications packten but this framework was not designed with the need of todays applications in might and plus it was overly complex so the angular JS team had to simplyfy  this framework and getrid of all the issues which it had. In the year 2016 the angular team
  // decided to re-write the original framework to scratch using Typescript as the programing language. and instead of calling it angular js this simply named it angular this angular framework is completely diffrent from its predisessers this is to angular js this version of angular was called as angular 2. now angular 2 was not a simple upgrade to previous version that is to angular js it was completely re-written from ground up and it was completely diffrent from angular 1. angular 2 also fixed all the issues which angular 1 had. so now we have another angular framework which is angular 2 and remember angular 2 is not angular js. these two are completely diffrent frameworks . nowdays angular 1 is hardly in use and since the intial release of angular 2 there are other versions of angular which has been released over the years. for example- angular 4,
  // angular 5, 6 and so on angular 16. and after the release of angular 2 the angular team simply adhaje to a version in screen where a new version of angular is released every 6 months and that new version a however not the complete re-write instead they have some minor changes of few new features also remember that angular 2 and latter versions of angular are simply refered to as angular so now we have two kinds of angular - angular js wich is the first version of angular and angular which is angular 2 and the latter versions of angular.


  // => Angular CLI
//  Angular CLI is a command line tool/interface which we use to crate new angular project or genrate some boiler plate code as well as create deployable packages.  
// to install CLI we are going to use npm command to install this angular CLI package.
// npm install - global @angular/cli@latest

// Just to ensure that the installation is successful we can run other command
// type => ng version

// => In order to create angular project 
// To create angular project first we need to move the folder where we want to create the project and for that we can use command prompt/terminal and type following command.
// ng new project-name 

// Lets's now run the angular project which we have just created and let us run it in browser by using another cli command 
// => In order to compile and run 
// To run an angular project first we need to move to the project folder using command prompt/terminal andd then we need to type following command
// => ng serve  

// what will this ng serve command do is first it will compile the angular projects it will genrate bundals for javascript and CSS files and then it will open a live development server on which we can run this project and after press enter these bundles have been created this project has been compiled  and as long as that process running we will be able to access this webpage on localhost portno 4200

// if we kill that process which is currently running in that case we will not be able to access this angular 
// application on localhost :4200
// In order to kill the process we can simply press ctrl+C , so the process has been terminated now we should not be able to access this web application


// web page ui's view page source's html is coming from index.html file, in view page source has some extra things like script which fave been added here but these script are not there in index.html apart from this everything available so this html content is also available here when we are viewing the page source.

// so we know that when we are running our angular project in the browser index.html file is getting loaded and it is being getting rendred.

// Qu. where these scripts are coming from ?
// Ans. these script are coming from angular cli basically when we run this ng serve command what it does is, it first compiles our project then it creates some bundles and then it inject these bundles in the index.html file so these bundles are the scripts which we see in page source these script files have been created by this ng serve command they have been bundled and they have been injected in our index.html file for angular project.



// Qu. In the ui we have so many things rendred but in the html file We only see this app root and this app root in not even a html element then what is this app root and when we are using this app root how it is rendering in this ui ?
// Ans. this app root here it is basically rendering a component, when we use this app root as a html element here it is going to render a component now which component is rendering here it is rendering app component and to see the app component you see this app folder and we have 5 files we also have app moduls.ts file but it's not part of that app component.
// A component consits of 4 main files=> .ts file the typescript file .ts is an extension of typescript file so we have .ts file, .html file, css file, we also have the spec.ts file so spec.ts file is not important this point of time basically spec.ts file we write the unit test for testing our unit components. but a component mainly has three files app.css, app.html, app.ts in these 4 files the most important component file is app.ts file this is a typescript file and in there you have acomponent class in this case the app component class name is app and this component class can be decorated wth component decorator when we create a component first we create a class in this case the class name is app and we need to decorate that class with this @component decorator In order to make that class a component class and to this @componet decorator here we are passing a object at in tis object we see we will have a selector which is app root so it is the same root which we are using in index.html so for a  component class when we specify a selector the value of that selector can be used as html element and that's have been doing here we are using the value of this selector this app root like an html element .



// when we use selector like app root in that case what it is going to do is in place of in place of this selector it is going to render the template which is associated with that selector in this case with this selector this template is associated now this templete here it simply called templateurl because to this we are assigning a path the path of html file so in this case whereever  we will use this app root they are the content of this html file will be rendred.

// now where this html file rendred ?
// In the same app folder we see that we have that  app.html it thisapp.html we have some html and css so it is this html and css which is getting rendred in ui when we are useing this app root html element. 


// Here we are writing static html for static html we don't need framework like angular we use a framework like angular in order to genrate dynamic content so we don't use angular for generate static content we use it for genreating dynamic content  so how can we genrate dynamic content using angular in this case .

// <h2> welcome to ekart <h2>
// here either we can say ekart or we can genrate that content dynamically for that we can go to app.ts in there we have property called title which is currently assigned with ekart and i go to app.html and here i will say to welcome to and double setup of {{}} like this and in there we specify title so here the value of this title property will be rendred so in this way we are genrating dynamic content whenever we will change the value of this title property it will change in browser so now we are genrating the content dynamically  and this concept here is called as data binding so basically we are binding this property in our html using this double set of {{}}. angular allow us to mix static html code with dynamic things we want to output in the code. 

// <h2> welcome to {{title}} <h2> 
// {{}} these double currlibraces are called interpolation

// What is typescript ?
// typescript is a free & opensource programing language developed by microsoft. It is a superset of javascript that means any valid javascript code is also a valid typescript code .


// what is component ?
// A component is a small piece of user interface. every angular application has atleast one component that is called root element but simply we call it app component it has it's child component. An Angular application is essentially a tree of component. combining all these components together makes an angular ui.

// create a component 
// create a typescript class & export it.
// decorate the class with @component Decoretor.
// in order to use that class as component we need to declare that class in main module file. 


// important => a component is nothing but a typescript class.

// inside class we declare properties and outside of class we declare variables.


// interpolation use => we use interpolation to display data from ts to html file. we can excute javascript code in {{}} in html file.

// Qu. what is component?
// Ans. when we make very big things so it has small parts that is called component.


// interview question

// Qu. when we take class then we can't take ever variable, constant inside class ?
// Ans. we can take variable, constant inside class if we have function
// class component{
// title : ''angular-tut
  //  function (){
          // let a = 20;
       // }
// }

// so we take variables in class inside function but we can't take them directely in class. 

// Qu. what is diffrence between ts.config.app.json and ts.config.json ?
// Ans. the diffrence between both is that config.app file is specifically for app components and ts.config.json is for all application files.

// Qu. what is diffrence between dependencies and devdependencies ?
// Ans.

// Qu. what are the limitations of interpolation?
// Ans. we can't assign and make variable, and can't use increment and decrment operator and can't use for loops directely.
// <h1>{{Data= 30}}</h1>
// <h1>{{x++}}</h1>
// <h1>{{x--}}</h1>


// Qu. How can you assure that which ts.component code is print on which html.component?
// Ans. that urltemplate is in ts.component that's one html.component we will use. 


// Qu. How to create components and what is commands ?
// Ans. ng generate component name/ng g c name

// Qu. what is component and how to change the selector ?
// Ans. component is a application building blocks inside component we can create specific features. 
// we can create component inside component and also can use one component many times. and for changing selector we need to go that components's ts. file and there we can change this.

// Qu. how many files a component has ?
// Ans. 4

// Qu. How many types of components ?
// Ans. 2
// 1. Normal component
//  2. Inline components
