var myElement = document.getElementById('age');
var myRandomNumber = Math.floor(Math.random() * 100);
var mySentence = `I am ${myRandomNumber} years old.`;
myElement.innerHTML = mySentence;
console.log(mySentence);
var myButton = document.getElementsByName('myButton');
myButton.addEventlistener('click', event =>{
  
});
