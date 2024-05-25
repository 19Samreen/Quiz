//Quiz
import inquirer from 'inquirer';
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Mercury"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Stephen King", "Ernest Hemingway"],
        answer: "Harper Lee"
    }
];
async function startQuiz() {
    let score = 0;
    console.log("Welcome to the Quiz!");
    for (let i = 0; i < questions.length; i++) {
        const { userAnswer } = await inquirer.prompt([
            {
                type: 'list',
                name: 'userAnswer',
                message: `${i + 1}. ${questions[i].question}`,
                choices: questions[i].options
            }
        ]);
        if (userAnswer === questions[i].answer) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log("Incorrect! The correct answer is:", questions[i].answer);
        }
    }
    console.log(`Quiz completed! Your score: ${score} out of ${questions.length}`);
}
startQuiz();
