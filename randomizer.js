var myElement = document.getElementById('age');
var myRandomNumber = Math.floor(Math.random() * 100);
var mySentence = `I am ${myRandomNumber} years old.`;
myElement.innerHTML = mySentence;
console.log(mySentence);
var myButton = document.getElementsByName('myButton');
myButton.addEventListener('click', function(event){
  var myNoun = document.getElementById('noun').value;
  var myVerb = document.getElementById('verb').value;
  var myAdject = document.getElementById('adject').value;
  var myAdverb = document.getElementById('adverb').value;
  var myMadLab = `Do you ${myVerb} your ${myAdject} ${myNoun} ${myAdverb}?<br>Thats hilarious!!`;
  var myTarget = document.getElementById('target');
  myTarget.innerHTML = myMadLab;
});
