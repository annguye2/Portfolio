
console.clear();
const app = angular.module('MyApp', []);

app.controller('Main', ['$http',function($http){
  this.showFirstSectionBoolean  = true;
  this.showSecondSectionBoolean = false;
  this.showThirdSectionBoolean  = false;
  this.welcomeMessage = "Hello From Angular";


  this.openFirstSection = () =>{
    this.showFirstSectionBoolean  = true;
    this.showSecondSectionBoolean = !this.showFirstSectionBoolean;
    this.showThirdSectionBoolean  = !this.showFirstSectionBoolean;
  }

  this.openSecondSection = () =>{
    this.showSecondSectionBoolean = true;
    this.showFirstSectionBoolean  = !this.showSecondSectionBoolean;
    this.showThirdSectionBoolean  = !this.showSecondSectionBoolean;
  }

  this.openThirdSection = () =>{
   this.showThirdSectionBoolean = true;
   this.showFirstSectionBoolean = !this.showThirdSectionBoolean;
  this.showSecondSectionBoolean  = !this.showThirdSectionBoolean;

  }
}]); // end of user controller
