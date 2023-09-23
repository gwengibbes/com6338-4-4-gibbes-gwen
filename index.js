var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]
function nextRound(){
  previousWordEl.innerHTML = activeWord
  console.log('New word: ', activeWord)
  activeWord = words[Math.floor(Math.random() * words.length)]
  wordDisplay = new Array(activeWord.length).fill('_');
 console.log('undescores', wordDisplay)
 wordToGuessEl.innerHTML= wordDisplay.join('')
 remainingGuesses = 10
remainingGuessesEl.innerHTML=remainingGuesses
 incorrectLettersArray =[];
 incorrectLettersEl.innerHTML = '';
}

var previousWordEl = document.getElementById('previous-word')
var incorrectLettersEl = document.getElementById('incorrect-letters')
var remainingGuessesEl = document.getElementById('remaining-guesses')
var wordToGuessEl = document.getElementById('word-to-guess')
var winsEl = document.getElementById('wins')
var lossesEl= document.getElementById('losses')
var activeWord 
var wordDisplay

var incorrectLettersArray =[]
//display remaining guesses in #remaining-guesses element.//
//display 10 guesses at the start of the game with clicks//
var remainingGuesses = 10
remainingGuessesEl.innerHTML=remainingGuesses
var wins = 0
var losses = 0

//select a word at random from the word list array.//
activeWord = words [Math.floor(Math.random() * words.length)];
console.log ('Active word is:', activeWord)
 // place the word in the #word-to-guess element replacing the letters with underscores.//
 //display underscore for each letter of current word
 wordDisplay = new Array(activeWord.length).fill('_');
 console.log('undescores', wordDisplay)
 wordToGuessEl.innerHTML= wordDisplay.join('')
document.body.onkeyup = function (e) {
  // filter keypresses
  var key = e.key.toLowerCase()
  console.log('Keypressed: ', key)
 //should compare any other guessed letters as incorrect
 //prevent repeat letters showing up more than once (do nothing)
if (incorrectLettersArray.indexOf(key) >= 0) return
//prevent already guessed letters from rerunning the script
if (wordDisplay.indexOf(key) >= 0) return
//to only accept letters of the alphabet
if (key.length > 1 || key.charCodeAt(0) < 97 || key.charCodeAt(0) > 122)return

//compare picked and random letters
  var lettersMatched = 0;
  for(var i=0; i<activeWord.length; i++){
    var letter = activeWord.charAt(i)
    if (key == letter){
      wordDisplay[i] = letter;
      lettersMatched++;
    }
//incorrect word increases the losses and resets game for next word
  }
  if(lettersMatched == 0){
    incorrectLettersArray.push(key)
    incorrectLettersEl.innerHTML = incorrectLettersArray.join(',');
    remainingGuesses--
    remainingGuessesEl.innerHTML = remainingGuesses;
    if(remainingGuesses==0){
      losses++
      lossesEl.innerHTML = losses;
      nextRound()
    }
  }
  wordToGuessEl.innerHTML= wordDisplay.join('')

  //correct word increases the wins and resets game for next word
if(activeWord===wordDisplay.join('')){
  console.log('You have won')
  wins++
  winsEl.innerHTML = wins;
  nextRound()
}
}
