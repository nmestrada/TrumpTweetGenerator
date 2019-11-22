import text from './seed.js'

let parseText = (string) => {

    let lowerCaseString = string.toLowerCase();
    let newString = lowerCaseString.replace(/[)(?!,.]/g,"");
    let array = newString.split(" ");
    
    return array;
}

// parseText(text);

let generateWordPairs = (string) => {
  let obj = {}; 
  let array = parseText(string);
  for (let i=0; i< array.length - 1; i++) {
    let element = array[i];
    if(obj[element]){
      obj[element].push(array[i+1]);
      if(array[i+2]){
      obj[element].push(`${array[i+1]} ${array[i+2]}`);
      }
      if(array[i+3]){
      obj[element].push(`${array[i+1]} ${array[i+2]} ${array[i+3]}`);
      }
    }else {
      obj[element] = [array[i+1]];
      if(array[i+2]){
      obj[element].push(`${array[i+1]} ${array[i+2]}`);
      }
      if(array[i+3]){
      obj[element].push(`${array[i+1]} ${array[i+2]} ${array[i+3]}`);
      }
    }
    
  }
  return obj;
}
let textObj = generateWordPairs(text);

//create function writeLine that takes a markov Chain (object) and a length of words (n) and returns a line of poetry, it will need a helper function that takes a word and randomly choose a word from its markov chain array. when a word has no entries in it's markov chain the program should choose a new word and continue the line until it meets the word count
function getRandomWord(word, obj){
  let randomWord = '';
  let keyArray = Object.keys(obj);

  if (typeof obj[word] === 'undefined'){
    let keyLength = keyArray.length;
    let randomIndex = Math.floor(Math.random()*keyLength);
    randomWord = `${keyArray[randomIndex]}`;
  }
  else if(obj[word].length >1){
    let length = obj[word].length;
    let randomIndex = Math.floor(Math.random()*length);
    randomWord = `${obj[word][randomIndex]}`;
  }
  else {
    randomWord = `${obj[word]}`;
  }
  return randomWord;
}

// console.log(getRandomWord('along', textArray));
function formatSentence(text){
  let textArray = text.split(" ");
  let length = textArray.length;
  // if(textArray[length-1] === "the" || textArray[length-1] === "and" || textArray[length-1] === "i"){
  //   textArray.pop();
  //   length = textArray.length;
  // }
  let newSentence = `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
  let upperCaseSentence = '';
  
  
  if (length === 3 ){
    upperCaseSentence = `${newSentence.toUpperCase()}!`;
    return upperCaseSentence;
  }
  newSentence += '.';
  return newSentence;
}

function writeLine(obj, numWords){
  //n is the number of words
  let keys = Object.keys(obj);
  let keyLength = keys.length;
  let sentence = '';
  for(let i=1; i<=numWords/2;i++){
    let randomIndex = Math.floor(Math.random()*keyLength);
    let randomWord = `${keys[randomIndex]}`;
    if(sentence === ''){
      sentence = `${sentence}${randomWord} ${getRandomWord(randomWord,obj)}`;
    }else { 
      sentence = `${sentence} ${randomWord} ${getRandomWord(randomWord,obj)}`;
    }
  }
  sentence = formatSentence(sentence);
  return sentence;
}

// console.log(writeLine(textArray,10));

function generatePoem(object, numLines){
  let poem = "";
  
  for(let i=1; i<=numLines; i++){
    let num = 2 + Math.floor(Math.random()*6);
    poem =`${poem} ${writeLine(object,num)}`;
  }
  return poem;
}

let post = generatePoem(textObj, 3);

export default post;