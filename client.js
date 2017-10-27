var myApp = angular.module('myApp',[]);

myApp.controller('GuessWhoController',function(){
  var guess = this;
  guess.people = [{name: 'Aaron',github:'bozeman42', show: true},{name: "Emi", github: "emimbchen", show: true},{name: "Marta", github: "martajopp", show: true},{name: "Xong", github: "xongxiong", show: true},{name: "Chris Black", github: "christopher-black", show: true}];

  guess.submitName = function(){
    guess.people.push({name: guess.nameIn,github: guess.githubIn});
    guess.nameIn = '';
    guess.githubIn = '';
    console.log(guess.people);
  };

  

  guess.nameToGuess = guess.people[0];

  guess.clickAPic = function(person){
    guess.clicked = person.name;
  };
});// end GuessWhoController

function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}