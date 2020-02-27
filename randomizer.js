var element = document.getElementById('age');
var randomNumber = Math.floor(Math.random() * 100);
var sentence = `I am ${randomNumber} years old.`;
element.innerHTML = sentence;
console.log(sentence);
var button = document.getElementById('myButton');
button.addEventListener('click', function(event){
  var noun = document.getElementById('noun').value;
  var verb = document.getElementById('verb').value;
  var adject = document.getElementById('adject').value;
  var adverb = document.getElementById('adverb').value;
  var madLab = `Do you ${verb} your ${adject} ${noun} ${adverb}?`;
  var target = document.getElementById('target');
  target.innerHTML = madLab;
});
