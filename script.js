let timer = document.getElementsByClassName("timer")[0];
let quizContainer = document.getElementById("container");
let nextButton = document.getElementById("next-button");
let numOfQuestions = document.getElementsByClassName("number-of-questions")[0];
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 5;
let countdown;

//Put All the Names Below

//I'm betting 10 dollars that Iris says "Henry, this is too easy"
//Board
//let names = ['Iris', 'Braedon', 'Audrey', 'Victor', 'Will', "Lindsey", "Helena", "Lauren", "Hailey", "Andrea", "Elliot", "Will (Really)", "Spencer", "Marina"]

let names = ['Andrea Fernandez', 'Vivian Yee', 'Brian Lee', 'Azeez Richardson', 'Elliot Chin', 'Robert Hochstadt', 'Helena Jiang', 'Ashley Redhead', 'Taryn Riddle', 'Ana Brito', 'Peter Donets', 'Isabella Cho', 'Emma Chan', 'Gabriel Basden', 'Nikhil Kamat', 'Victor Ghosh', 'Charlotte Rediker', 'Claire Zhai', 'Jane Lichtman', 'Matthew Pantaleo', 'Sami Turner', 'Ariel Beck', 'Yafan Wang', 'Shu Yang Wei', 'Will Schrepferman', 'Emma Miao', 'Khanh Le', 'Mollie Cheng', 'Danielle Ordemann', 'Humza Mahmood', 'Santiago Calderon', 'Matteo Wakeman', 'Zaki Lakhani', 'Hailee Youn', 'Chenyi Zhang', 'Rohan Battula', 'Layla Dawit', 'Cassie Liu', 'Ee Jenn Lee', 'Caine Ardayfio', 'Loretta Eng', 'Alice Khayami', 'Emma Finn', 'Jada Pierre', 'Selam Ambaw', 'Alexander Aldrich', 'Abdu Sahibousidq', 'Ann Nguyen', 'Blake Woodford', 'David Kiley', 'Kaitlyn Tran', 'Hana Rostami', 'Alex Fleury', 'Alex Lim', 'Cave Voss', 'Hailey Olcott', 'Nick Harpe', 'Raina Cohen', 'Charisma Chen', 'Jordyn Pierre-Raphael', 'Taig Singh', 'Katharina Ravichandran', 'Marina Sanchez', 'Andrew Lu', 'Michelle Zhang', 'Sasha Agarwal', 'Samuel Davidson', 'Kaleena Roeva', 'Adam Zhou', 'Tahj Johnson', 'Kevin Wang', 'Sarah Moreno', 'Hiro Kondo', 'Spencer Tyson', 'Conor Burns', 'Ashley Hernandez', 'Nikhil Datar', 'Harrison von Dwingelo', 'Lauren Shen', 'Alexander Tonelli', 'Said El Kadi', 'Ashley Herrera', 'Amy Dong', 'Jodie Down', 'James Farr', 'Adeline Orcutt', 'Sophia Zhang', 'Jessica Lee', 'Hanna Wosenu', 'Emily Axelsen', 'Cindy Zhu', 'Janice Nam', 'Yewon Lee', 'Kyle Felter', 'Esteban Medina', 'Henry Bae', 'Henry Xuan', 'Michelle Doan', 'Audrey Vanderslice', 'Iris Chen', 'Pranav Moudgalya', 'Avery Barakett', 'Gabriel Ferrer', 'Unnati Gupta', 'Simeon Sayer', 'Toby Nwafor', 'Anthony Fletcher', 'Khalil Ben-Gacem', 'Lindsey Chan', 'Amber Wei', 'Ryan Ho', 'Katie Lu', 'Sebastian Ramirez Feune', 'Arsema Aklog', 'Ethan Fang', 'Hannah Zhou', 'Uri Rolls', 'Juhui Jin', 'Alexander Zurovec', 'Logan Ashby', 'Jonas Freeman', 'MC Hanafee LaPlante']

//Questions and Options Array
let quizArray = [];

const generateRandomValue = (array) =>
  array[Math.floor(Math.random() * array.length)];


const populateOptions = (optionsArray) => {
  let expectedLength = 4;
  while (optionsArray.length < expectedLength) {
    let name = names[Math.floor(Math.random() * names.length)];
    if (!optionsArray.includes(name)) {
      optionsArray.push(name);
    }
  }
  return optionsArray;
};

const populateQuiz = () => {
  //for (let i = 0; i < names.length; i++) {
  for (let i = 0; i < 25; i++) {
    let curentName = names[i]
    let allNames = [];
    allNames.push(curentName);
    allNames = populateOptions(allNames);
    quizArray.push({
      id: i,
      correct: names[i],
      options: allNames
    });
  }
};





//Next button
nextButton.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCOunt
    questionCount += 1;
    //If last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      //User score
      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      //displau questionCount
      numOfQuestions.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";

      //display quiz
      quizDisplay(questionCount);
      //count=11(so it start with 10)
      count = 10;
      //clearInterval for next question
      clearInterval(countdown);
      //display timer
      timerDisplay();
    }
    nextButton.classList.add("hide");
  })
);

//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    timer.innerHTML = `<span>Time Left: </span> ${count-1}s`;
    count--;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

//Display Quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });

  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);

  //Generate quiz
  for (let i of quizArray) {
    //Randomly sort options
    i.options.sort(() => Math.random() - 0.5);

    //Quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");

    //Question number
    numOfQuestions.innerHTML = 1 + " of " + quizArray.length + " Question";

    //question
    //let questionDiv = document.createElement("p");
    //questionDiv.classList.add("question");
    //Original
    //questionDiv.innerHTML = `<div class="question-color">${i.correct}</div>`;

    //questionDiv.innerHTML = `<img class = "question-color" src = "./images/hamster.jpeg>`;
    var questionDiv = document.createElement("img");

    //Check if File with Extension Exists





    questionDiv.src = './images/' + i.id + '.jpg';
    //if(i.correct == "Marina"){
    //  questionDiv.src = './images/' + i.correct + '.gif';
    //}
    questionDiv.classList.add("question-color");
    


    div.appendChild(questionDiv);
    //Options
/*     div.innerHTML += `
    <div class="button-container">
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[0]}" data-option="${i.options[0]}">Hi</button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[1]}" data-option="${i.options[1]}"></button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[2]}" data-option="${i.options[2]}"></button>
    <button class="option-div" onclick="checker(this)" style="background-color: ${i.options[3]}" data-option="${i.options[3]}"></button>
    </div>
    `; */

    div.innerHTML += `
    <div class="button-container">
    <button class="option-div" onclick="checker(this)" style="background-color: #f52121" data-option="${i.options[0]}">${i.options[0]}</button>
    <button class="option-div" onclick="checker(this)" style="background-color: #f52121" data-option="${i.options[1]}">${i.options[1]}</button>
    <button class="option-div" onclick="checker(this)" style="background-color: #f52121" data-option="${i.options[2]}">${i.options[2]}</button>
    <button class="option-div" onclick="checker(this)" style="background-color: #f52121" data-option="${i.options[3]}">${i.options[3]}</button>
    </div>
    `
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.getAttribute("data-option");
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");
  //If users clicked answer === correct
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    options.forEach((element) => {
      if (
        element.getAttribute("data-option") == quizArray[questionCount].correct
      ) {
        element.classList.add("correct");
      }
    });
  }
  //clear interval
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
  nextButton.classList.remove("hide");
}

function initial() {
  nextButton.classList.add("hide");
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  clearInterval(countdown);
  count = 10;
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//Restart game
restart.addEventListener("click", () => {
  quizArray = [];
  populateQuiz();
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});

//When user clicks on start button
startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  quizArray = [];
  populateQuiz();
  initial();
});