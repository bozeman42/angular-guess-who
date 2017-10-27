var myApp = angular.module('myApp',[]);

myApp.controller('GuessWhoController',function(){
  var guess = this;
  guess.people = [{name: 'Aaron',github:'bozeman42', show: true},{name: "Emi", github: "emimbchen", show: true},{name: "Marta", github: "martajopp", show: true},{name: "Xong", github: "xongxiong", show: true},{name: "Chris Black", github: "christopher-black", show: true}];

  guess.submitName = function(){
    guess.people.push({name: nameIn,github: githubIn, show: true});
    nameIn = '';
    guess.githubIn = '';
    console.log(guess.people);
  };

  
  guess.reset = function(){
    guess.target = guess.people[randomNumber(0,guess.people.length-1)];
    while(guess.target.show === false){
      guess.target = guess.people[randomNumber(0,guess.people.length-1)];
    }
    guess.nameToGuess = guess.target.name;
  };
  
  guess.reset();
  guess.clickAPic = function(person){
    guess.clicked = person;
    if (person.name === guess.target.name){
      alert("You got it!");
      person.show = false;
      if (
        guess.people.some(function(person){
        return (person.show === true);
      }))
      { // if there is a person that is visible
        guess.reset();
      } else {
        guess.people.forEach(function(element){
          element.show = true;
        });
        guess.reset();
      }
    } else {
      alert('Nope!');
    }
  };
});// end GuessWhoController

function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min+1)+min);
}