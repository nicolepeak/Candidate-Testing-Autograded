const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""; //I defined the variable as empty using "" 

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? "; // I defined all of these variables for 1st Q
let correctAnswer = "Sally Ride"; 
let candidateAnswer = "";   // initialized as empty string


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers=[
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers= []


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ")
}           // I used readline-sync module to prompt user for their name

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (i = 0; i < questions.length; i++) {
let userInput = input.question (questions[i])
candidateAnswers.push(userInput);
}
console.log(candidateAnswers);
}    

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (i=0; i<candidateAnswers.length; i++) {
  console.log(`You answered ${candidateAnswers[i]} and the correct answer is ${correctAnswers[i]}`);
  console.log("-----------------");
}
//I used an if else function to print if the user had the correct answer or not


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello,", candidateName , "!");  // I printed the user's name using the variable associated with the user input
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};