/**
 * True False Test Scorer
 * run program by executing `node index.js` in your console
 */


// ask for answers and validate

// ask for questions and validate

const inquirer = require("inquirer");

console.log("Hey, welcome :)");

var questions = [
    {
        type: "input",
        name: "correctAnswers",
        message: "Please type in the correct answers",
        validate: (value) => {
            // replace spaces 
            value = value.replace(/\s/g, "");

            // length of string must be 30
            if (value.length != 30) return "Length of answers must be 30";

            // string must be made up of only T or F characters
            let pass = value.match(/[TF]/g)

            if (!pass) return "Characters must be made up of only T or F";

            return true;
        }
    },
    {
        type: "input",
        name: "answerSets",
        message: "Please type in the answers",
        validate: (value) => {
            // replace spaces 
            value = value.replace(/\s/g, "");

            // length of string minus student number must be in increments 30

            // remove integers
            let numRemoved = value.replace(/[0-9]+/g, "");
            if (numRemoved.length % 30 != 0) return "Length of string minus student numbers must be in increments 30";

            // string must be made up of only T, F or x characters
            let pass = value.match(/[TFx0-9]/g)

            if (!pass) return "Characters must be made up of only T, F or x";

            // string must end with 999
            pass = value.match(/[TFx0-9]999$/g)

            if (!pass) return "Characters must end with 999";

            return true;
        }
    }
]

inquirer.prompt(questions).then((answers) => {
    let answerSets = answers.answerSets.replace(/\s/g, "");;

    // use regex to get answers and student's corresponding id
    let matched = answerSets.matchAll(/([0-9]+)([TFx]+)/g);

    let correctAnswers = answers.correctAnswers.replace(/\s/g, "");
    let scoreArray = [];

    //mark answers
    console.log(matched);
    for (m of matched) {
    
        let startingScore = 0;

        for (let i = 0; i < 30; i++) {
            // mark wrong
            if (m[2][i] != correctAnswers[i]) {
                // subtract 0
                if (m[2][i] == "x") startingScore -= 0;
                else startingScore -= 1;
            } else {
                // mark correct
                startingScore += 1;
            }
        }

        // save score and student number
        scoreArray.push({ student_number: m[1], score: startingScore });
    }

    // print score 
    for (let score of scoreArray) {
        console.log(`${score.student_number} ${score.score} marks`)
    }

});