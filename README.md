# Angular4 Module

This app is about demonstrating the basic building blocks on an Angular app. More precisely, it explores how modules share components (directives and pipes) and in another fashion, the services.

In short, it consists of an app with 2 modules containing components which are shared only if you specify it and a service which is shared globally.

This project as well as modules, components and the service, were generated with Angular CLI.


## Description

To experiment basic module/component buildup with Angular 2, this application contains 2 modules.

The 2 components displayed here belongs to the first module. But the first component includes the component from the second module.

A service from the first module is used in a component from each module.


## Theory

It is good to note that component, pipes and directives need to be imported in each module needing them when a module used to provide services would need to be imported only once from the root module. Importing them elsewhere would have the same effect but it would be just difficult to find them.

This example doesn't cover the AOT compilation that is used with the router. But just to mention the case, the services would be injected only to the relevent module via the route.

This example also doesn't cover the use of a store which centralises data.


## How to run it

* You may need to install Angular-CLI if it is not already globally installed.
* Run `npm install`to generate node_modules/.
* Run `ng serve` for a dev server.
* Navigate to `http://localhost:4200/`.


## Else

License: Mit

[vincentperrin.com](http://vincentperrin.com/ "vincentperrin.com")