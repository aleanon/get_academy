
let layout = ""

let expandedCardId = null;

// Index 0 is for head, index 1 is for body and index 2 is for legs
let bodyParts = [1,1,1]


function updateView() {
    document.body.innerHTML = /*HTML*/ `
    ${createButton("changeLayout('')", "Ingen layout")}
    ${createButton("changeLayout('vertical')", "Vertikal layout")}
    ${createButton("changeLayout('horizontal')", "Horisontal layout")}
    ${createButton("changeLayout('grid')", "Grid layout")}
    <h1>Eksempel 1</h1>
    <div id="cards" class=${layout}>
        ${createCard("green", "Verktøy", "cardTools", expandedCardId == "cardTools" ? createToolsView() : "", "")}
        ${createCard("blue", "HTML", "cardHtml", expandedCardId == "cardHtml" ? createHtmlView() : "", "")}
        ${createCard("red", "CSS", "cardCSS", expandedCardId == "cardCSS" ? createCssView() : "", "")}
        ${createCard("yellow", "JavaScript", "cardJavaScript", expandedCardId == "cardJavaScript" ? createJsView() : "", "")}
        ${createCard("dark", "Hode, kropp og ben", "cardGame", expandedCardId == "cardGame" ? createBodyGameView() : "", "bodies")}
    </div>
    `;
}

function changeLayout(newLayout) {
    layout = newLayout;
    updateView();
}

function changeExpanded(newExpantion) {
    expandedCardId = expandedCardId === newExpantion ? null : newExpantion;
    updateView();
}

function createButton(onclick, text) {
    return /*html*/`<button onclick="${onclick}">${text}</button>`;
}

function createCard(headerColor, headerText, cardId, content, group) {
    return /*html*/`
        ${createDiv("", "card", /*HTML*/ `
            <div class="header ${headerColor}" onclick="changeExpanded('${cardId}')">
                ${headerText}
            </div>
            ${createDiv(cardId, group, content)}
        `)}
    `;
}

function createDiv(id, group, content) {
    if (group == "" || group == null) return /*html*/`<div id="${id}">${content}</div>`;
    if (id == "" || id == null) return /*html*/ `<div class="${group}">${content}</div>`;
    return /*html*/`<div id="${id}" class="${group}">${content}</div>`;
}

function createToolsView() {
    return /*html*/`
    <div class="innerCard">
    De to viktigste verktøyene vi skal bruke er disse:
        <ul>
            <li>
                Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                <br />Vi skal bruke noen <i>extensions</i>:
                <ul>
                    <li>JavaScript-booster</li>
                    <li>es6-string-html</li>
                    <li>live-server</li>
                    <li>live-share</li>
                </ul>
            </li>
            <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
        </ul>        
    </div>
`;
}

function createHtmlView() {
    return /*html*/`
    <div class="innerCard">
        Vi bruker HTML til å definere et dokument.
        <ul>
            <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
            <li>Tagger for grunnleggende formatering av tekst</li>
            <li><tt>&lt;div&gt;</tt></li>
            <li><tt>&lt;input type="text"&gt;</tt></li>
            <li><tt>&lt;button&gt;</tt></li>
            <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
            </li>
        </ul>
    </div>
`;
}

function createCssView() {
    return /*html*/`
    <div class="innerCard">
        Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
        <ul>
            <li><tt>background-color</tt></li>
            <li><tt>color</tt></li>
            <li><tt>padding</tt></li>
            <li><tt>margin</tt></li>
            <li><tt>border</tt></li>
            <li><tt>text-align</tt></li>
            <li><tt>font-size</tt></li>
            <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
            <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
            <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
            </li>
            <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
            </li>
        </ul>
    </div>
`;
}

function createJsView() {
    return /*html*/`
    <div class="innerCard">
        Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
        ved
        å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
        <ul>
            <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                Moodle.</li>
            <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                    Reference</a></li>
        
        </ul>
    </div>
    `;
}

function createBodyGameView() {
    return createBodyPart("head", 0)
        +createBodyPart("body", 1)
        +createBodyPart("legs", 2)
}

function createBodyPart(part, partIndex) {
    return createDiv("body", "bodyPart", /*HTML*/ `
        ${createButton(`previousBodyPart(${partIndex})`, "◀")}
        <img src="img/${part}${bodyParts[partIndex]}.png" />
        ${createButton(`nextBodyPart(${partIndex})`, "▶")}
    `)
}

function nextBodyPart(index) {
    bodyParts[index] = (bodyParts[index] % 4)+ 1;
    updateView()
}

function previousBodyPart(index) {
    if (bodyParts[index] == 1) {
        bodyParts[index] = 4;
    } else {
        bodyParts[index]--
    }
    updateView()
}


