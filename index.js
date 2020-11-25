var readlineSync = require('readline-sync');

var username = readlineSync.question("Hey! What's your name ?");

var score = 0;

console.log("Welcome"+ username+"to DO YOU KNOW Hemang!!")

function play(question,answer){

 var userAns = readlineSync.question(question);

 if(userAns.toLowerCase() === answer.toLowerCase()){
   console.log("You're right !!!")
   score = score + 2;
   console.log("Your current score is ",score)
   console.log("-----------")
 } else {
   console.log("You're wrong !!!")
   score = score - 1;
   console.log("The correct answer is",answer)
   console.log("Your current score is ",score)
   console.log("-----------")
 }
}
 console.log("Your score is ",score)
  console.log("-------------")


var quest = [{
  question : "Where was Hemang born ? ",
  answer : "Jodhpur"
}, {
  question : "What is Hemang's favourtite fruit ? ",
  answer : "Mango"
}, {
  question : "My favourite superhero would be ? ",
  answer : "Iron man"
}
];

for(i=0; i < quest.length;i++){
  var currentQuestion = quest[i];
  play(currentQuestion.question,currentQuestion.answer)
};





var highscore = [{
  name : 'Hemang',
  score: '6',
}, {
  name : 'Aditi',
  score: '4'
}];


for(i in highscore){
    if(score > highscore[i].score){
      highscore[i].name = username;
      highscore[i].score = score
      console.log(highscore)
      break;
    }
}
console.log("Leaderboard")
console.log("-----------")
console.log(highscore)