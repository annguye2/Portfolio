
console.clear();
const app = angular.module('MyApp', []);

app.controller('Main', ['$http',function($http){
  this.showFirstSectionBoolean  = true;
  this.showSecondSectionBoolean = false;
  this.showThirdSectionBoolean  = false;
  this.showFourthSectionBoolean = false;
  this.welcomeMessage = "Hello From Angular";


  this.openFirstSection = () =>{
    this.showFirstSectionBoolean    = true;
    this.showSecondSectionBoolean   = !this.showFirstSectionBoolean;
    this.showThirdSectionBoolean    = !this.showFirstSectionBoolean;
    // this.showFourthSectionBoolean   = !this.showFirstSectionBoolean;
  }

  this.openSecondSection = () =>{
    this.showSecondSectionBoolean   = true;
    this.showFirstSectionBoolean    = !this.showSecondSectionBoolean;
    this.showThirdSectionBoolean    = !this.showSecondSectionBoolean;
    // this.showFourthSectionBoolean   = !this.showSecondSectionBoolean;
  }

  this.openThirdSection = () =>{
    this.showThirdSectionBoolean  = true;
    this.showFirstSectionBoolean  = !this.showThirdSectionBoolean;
    this.showSecondSectionBoolean = !this.showThirdSectionBoolean;
    this.showFourthSectionBoolean = !this.showThirdSectionBoolean;
  }

  this.openFourthSection = () =>{
   this.showFourthSectionBoolean  = true;
   this.showFirstSectionBoolean   = !this.showFourthSectionBoolean;
   this.showSecondSectionBoolean  = !this.showFourthSectionBoolean;
   this.showThirdSectionBoolean   = !this.showFourthSectionBoolean;
  }
}]); // end of user controller
