
console.clear();
const app = angular.module('MyApp', []);

app.controller('Main', ['$http',function($http){
  this.showFirstSection = true;
  this.showSecondSection = false;
  this.showThirdSection  = false;

 this.welcomeMessage = "Hello From Angular";


 this.showFirstSection = () =>{

 }

}]); // end of user controller
