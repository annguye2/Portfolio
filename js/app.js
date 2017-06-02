
console.clear();
const app = angular.module('MyApp', []);

app.controller('Main', ['$http',function($http){

 this.welcomeMessage = "Hello From Angular";

}]); // end of user controller
