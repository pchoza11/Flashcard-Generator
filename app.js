console.log("\n>>>>>>>>>>>>>  ### WELCOME TO FLASHCARDS ###  <<<<<<<<<<<<<\n")

//============================================================================

var inquirer = require("inquirer");
var fs = require("fs");
var ClozeCard = require("./ClozeCard.js");
var BasicCard = require("./BasicCard.js");

var clozes = [];

//BASIC CARDS
//=======================================================
var firstPresident = new BasicCard(
    "\n\nWho was the first president of the United States?\n", "George Washington");
var fourthJuly = new BasicCard(
    "\n\nWhat year was American born\n", "1776");
var bostonMass = new BasicCard(
    "\n\nWhere did the Boston Massacre happen?\n", "Boston");
var texasQuestion = new BasicCard(
    "\n\nWhich State is known as 'the Lone Star State'?\n", "Texas");
var caliQuestion = new BasicCard(
    "\n\nWhat state is know as 'the Golden State'?\n", "California");
var azQuestion = new BasicCard(
    "\n\nWhere is the Grand Canyon?\n", "Arizona");
var sfQuestion = new BasicCard(
    "\n\nWhat city is famous for the Gold Rush of 1849?\n", "San Francisco");
var uclaQuestion = new BasicCard(
    "\n\nIn what city is UCLA?\n", "LA");

//CLOZE CARDS (attempting the loop and push to array)
//==========================================================

function newCloze(text, cloze) {
    var cq = new ClozeCard(text, cloze)
    clozes.push(cq)
}

var cq1 = new ClozeCard(
    "\n\nGeorge Washington was the first president of the United States?\n", "George Washington");
var cq2 = new ClozeCard(
    "\n\nAmerican born in 1776 .\n", "1776");
var cq3 = new ClozeCard(
    "\n\nThe Boston Massacre happened in Boston .\n", "Boston");
var cq4 = new ClozeCard(
    "\n\nTexas is known as 'the Lone Star State'.\n", "Texas");
var cq5 = new ClozeCard(
    "\n\nCalifornia is know as 'the Golden State'.\n", "California");
var cq6 = new ClozeCard(
    "\n\nThe Grand Canyon is in Arizona .\n", "Arizona");
var cq7 = new ClozeCard(
    "\n\nSan Francisco is famous for the Gold Rush of 1849.\n", "San Francisco");
var cq8 = new ClozeCard(
    "\n\nUCLA is in LA .\n", "LA");

function gameChoice(){
    inquirer.prompt([
        {
        type: "list",
        message: "What would you like to play?",
        choices: [ "Flashcards", "Cloze Cards"],
        name: "game"
        }
    ]).then(function(inquireResponse){
        if(inquireResponse.game === "Flashcards"){
            cardOne();
        }
        else{
            for ( i = 0; i < clozes.length; i++){
                inquirer.prompt([
                {
                    type: "input",
                    message: clozes[i].partial,
                    name: "answer"
                }
                ]).then(function(inquireResponse){
                if(inquireResponse.answer === clozes[i].text){
                    console.log("yes")
                }
                else{
                    console.log("no")
                }
                });
            };
            console.log("UNDER CONSTRUCTION")
            
        }
    })
}
gameChoice();


function cardOne(){
    inquirer.prompt([

        {
        type: "input",
        message: firstPresident.front,
        name: "qPresident"
        }
    ]).then(function(inquireResponse){
        if (inquireResponse.qPresident === firstPresident.back){
        console.log("THAT'S RIGHT!");
        cardTwo();
        }
        else {
            console.log("Good try, here's a hint.. The answer is: " + firstPresident.back);
            return cardOne();

        }
    })
}

function cardTwo(){
    inquirer.prompt([

        {
        type: "input",
        message: fourthJuly.front,
        name: "qFOJ"
        }
    ]).then(function(inquireResponse){
        if (inquireResponse.qFOJ === fourthJuly.back){
        console.log("THAT'S RIGHT!");
        cardThree();
        }
        else {
            console.log("Good try, here's a hint.. The answer is: " + fourthJuly.back);
            return cardTwo();

        }
    })
}
function cardThree(){
    inquirer.prompt([

        {
        type: "input",
        message: bostonMass.front,
        name: "qBoston"
        }
    ]).then(function(inquireResponse){
        if (inquireResponse.qBoston === bostonMass.back){
        console.log("THAT'S RIGHT!");
        cardFour();
        }
        else {
            console.log("Good try, here's a hint.. The answer is: " + bostonMass.back);
            return cardThree();

        }
    })
}
function cardFour(){
    inquirer.prompt([

        {
        type: "input",
        message: texasQuestion.front,
        name: "qTexas"
        }
    ]).then(function(inquireResponse){
        if (inquireResponse.qTexas === texasQuestion.back){
        console.log("THAT'S RIGHT!");
        cardFive();
        }
        else {
            console.log("Good try, here's a hint.. The answer is: " + texasQuestion.back);
            return cardFour();

        }
    })
}
function cardFive(){
    inquirer.prompt([

        {
        type: "input",
        message: caliQuestion.front,
        name: "qCali"
        }
    ]).then(function(inquireResponse){
        if (inquireResponse.qCali === caliQuestion.back){
        console.log("THAT'S RIGHT!");
        cardSix();
        }
        else {
            console.log("Good try, here's a hint.. The answer is: " + caliQuestion.back);
            return cardFive();

        }
    })
}
function cardSix(){
    inquirer.prompt([

        {
        type: "input",
        message: azQuestion.front,
        name: "qAZ"
        }
    ]).then(function(inquireResponse){
        if (inquireResponse.qAZ === azQuestion.back){
        console.log("THAT'S RIGHT!");
        cardSeven();
        }
        else {
            console.log("Good try, here's a hint.. The answer is: " + azQuestion.back);
            return cardSix();

        }
    })
}
function cardSeven(){
    inquirer.prompt([

        {
        type: "input",
        message: sfQuestion.front,
        name: "qSF"
        }
    ]).then(function(inquireResponse){
        if (inquireResponse.qSF === sfQuestion.back){
        console.log("THAT'S RIGHT!");
        cardEight();
        }
        else {
            console.log("Good try, here's a hint.. The answer is: " + sfQuestion.back);
            return cardSeven();

        }
    })
}
function cardEight(){
    inquirer.prompt([

        {
        type: "input",
        message: uclaQuestion.front,
        name: "qLA"
        }
    ]).then(function(inquireResponse){
        if (inquireResponse.qLA === uclaQuestion.back){
        console.log("WOW, GREAT JOB");
        console.log("YOU DA BEST");
        console.log("AND YOU ALL DONE");
        
        }
        else {
            console.log("Good try, here's a hint.. The answer is: " + uclaQuestion.back);
            return cardEight();

        }
    })
}
