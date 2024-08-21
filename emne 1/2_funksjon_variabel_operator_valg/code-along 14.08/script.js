// import { questionsArray } from "./questions.js"


let questions = [
    ["Hva er hovedstaden i Sverige", ["Göteborg", "Stockholm", "Malmö"], 1],
    ["Hva er verdens lengste elv", ["Amazonas", "Nilen", "Yangtze", "Mississippi"], 1],
    ["Hva heter Norges største innsjø", ["Randsfjorden", "Mjøsa", "Femunden", "Tyin"], 1],
    ["Hvilket år startet andre verdenskrig", ["1941", "1939", "1945"], 1],
    ["Hva er hovedstaden i Danmark", ["København", "Aarhus", "Odense"], 0],
    ["Hvem malte Mona Lisa", ["Raphael", "Leonardo da Vinci", "Michelangelo", "Donatello"], 1],
    ["Hva er det kjemiske symbolet for gull", ["Au", "Ag", "Pb", "Fe"], 0],
    ["Hvilken planet er nærmest solen", ["Mars", "Venus", "Merkur"], 2],
    ["Hva er hovedstaden i Italia", ["Napoli", "Roma", "Milano"], 1],
    ["Hva er verdens største kontinent", ["Asia", "Afrika", "Nord-Amerika", "Europa"], 0],
    ["Hvilken gass utgjør størstedelen av jordens atmosfære", ["Karbondioksid", "Nitrogen", "Oksygen"], 1],
    ["Hva heter hovedstaden i Finland", ["Tampere", "Oulu", "Helsingfors"], 2],
    ["Hvilken sjø er den salteste", ["Dødehavet", "Rødehavet", "Kaspihavet"], 0],
    ["Hvilket språk snakkes i Brasil", ["Portugisisk", "Spansk", "Fransk"], 0],
    ["Hva er det høyeste fjellet i Afrika", ["Mount Kenya", "Ruwenzori", "Kilimanjaro"], 2],
    ["Hvilken farge har smaragder", ["Grønn", "Rød", "Blå"], 0],
    ["Hva heter den største øya i verden", ["Grønland", "Borneo", "New Guinea", "Madagaskar"], 0],
    ["Hvem skrev 'Romeo og Julie'", ["William Shakespeare", "Charles Dickens", "Mark Twain"], 0],
    ["Hvilken by er kjent som 'The Big Apple'", ["San Francisco", "New York", "Los Angeles"], 1],
    ["Hvilket dyr er det største pattedyret i havet", ["Blåhval", "Spekkhogger", "Delfin"], 0]
];
let questionIndex = 0;
let correctAnswer;
let numOfCorrectAnswers = 0;

function drawQuestion() {
    let question = questions[questionIndex][0];
    let alternatives = questions[questionIndex][1];
    let correctAltIndex = questions[questionIndex][2];

    correctAnswer = alternatives[correctAltIndex];

    document.getElementById("quiz").innerHTML = /*HTML*/ `
        <h2>Quiz</h2>
        <h3>${question}</h3>
        <div id="alternatives">
            ${createAlternatives(alternatives)}
        </div>
        <button disabled=true id="next" onclick="nextQuestion()" style="background-color: white">Neste spørsmål</button>
    `;
}

function createAlternatives(alternatives) {
    let html = "";
    let length = alternatives.length;
    for (let i = 0; i < length; i++) {
        html += /*HTML*/`
        <button class="alternative" onclick="checkAnswer(this.value, this.id)" id="alt${i}" value="${alternatives[i]}">${alternatives[i]}</button>`
    }
    return html
}

function isCorrectAnswer(answer) {
    return answer === correctAnswer;
}

function checkAnswer(answer, id) {
    if (isCorrectAnswer(answer)) {
        document.getElementById(id).style.backgroundColor = "green";
        numOfCorrectAnswers++;
    } else {
        document.getElementById(id).style.backgroundColor = "red";
    }
    disableAndStyleAltButtons();
    enableAndStyleNextButton();
}

function disableAndStyleAltButtons() {
    let alternatives = document.getElementsByClassName("alternative");
    let length = alternatives.length;
    for (let i = 0; i < length; i++) {
        alternatives[i].setAttribute("disabled", true);
        alternatives[i].style.color = "black"
    }
}

function enableAndStyleNextButton() {
    let nextButton = document.getElementById("next");
    nextButton.removeAttribute("disabled", true);
    nextButton.style.backgroundColor = "blue";
    nextButton.style.color = "white";
}

function nextQuestion() {
    if (questionIndex < questions.length - 1) {
        questionIndex++;
        drawQuestion()
    } else {
        drawFinishedScreen();
    }
}

function drawFinishedScreen() {
    document.getElementById("quiz").innerHTML = /*HTML*/ `
        <h2>Gratulerer, du har fullført quizen!</h2>
        <h1>Du fikk ${numOfCorrectAnswers} poeng av ${questions.length} mulige</h1>
        <button id="restart-button" onclick="restartQuiz()">Prøv igjen</button>
    `;
}

function restartQuiz() {
    questionIndex = 0;
    numOfCorrectAnswers = 0;
    drawQuestion()
}
