       
## <p style="text-align: center;">Oppgave 2b</p>

###### Applikasjonsbeskrivelse 
Applikasjonen er et ordpuslespill med et sett urelaterte oppgaver hvor man skal finne de manglende bokstavene. 
Hver oppgave består av to ord: ett som mangler slutten og ett som mangler starten. 
Den manglende slutten på det ene ordet er identisk med den manglende starten på det andre ordet.
Trykker man på spørsmålstegnet, får man svaret.

###### Konstanter
```js 
const totalWordPairs = 10;
const minWordLength = 7;
const numOfHiddenLetters = 3;
```
- `totalWordPairs` avgjør hvor mange ordpar som skal vises på siden.
- `minWordLength` avgjør minimumslengden på ord i spillet.
- `numOfHiddenLetters` avgjør hvor mange bokstaver som skal skjules i hvert ord.

###### Funksjoner
```js 
function generateWordPuzzles() {
    document.body.innerHTML = createRandomWordPairsHtml();
}
```
`generateWordPuzzles` setter spillets HTML inn i body-elementet.
```js
function createRandomWordPairsHtml() {
    let html = "";
    let wordPairsLeft = totalWordPairs;
    while (wordPairsLeft > 0) {
        let word1 = getRandomWord();
        if (!wordIsLongEnough(word1)) continue;

        let word2 = findCompatibleWord(word1);
        if (word2 == null) continue;

        html += createWordPairHtml(word1, word2);
        wordPairsLeft--;
    }
    return html;
}
```
`createRandomWordPairsHtml` konstruerer en `string` med HTML for alle ordpar.
Dette gjøres i 10 steg:
1. Konstruerer en tom `string` som vi skal bygge på.
2. `wordPairsLeft` settes til antallet ordpar vi skal ha, og fungerer som en nedtelling.
3. Starter en løkke som går frem til vi har funnet ønsket antall ordpar.
4. Finner et tilfeldig ord fra ordlisten.
5. Hvis ordet er for kort, start en ny runde i løkken, ellers gå videre. 
6. Prøver å finne et gyldig ord å pare med ord én. 
7. Hvis vi ikke fant et ord, starter en ny runde i løkken, ellers gå videre.
8. Genererer HTML for ordparet og legger det til i HTML-strengen.
9. Reduserer gjenværende ordpar med én.
10. Når `wordPairsLeft` er lik 0, returnerer vi HTML-strengen.
 
```js
function getRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex].trim();
}
```
`getRandomWord` finner et tilfeldig ord fra ordlisten i to steg:
1. Finner et tilfeldig tall mellom 0 (inkludert) og antall elementer i ordlisten.
2. Returnerer ordet ved den tilfeldige indeksen i ordlisten.

```js
function wordIsLongEnough(word) {
    return word.length >= minWordLength
}
```

`wordIsLongEnough` sjekker om ordet er større enn eller lik verdien i `minWordLength`.

```js
function findCompatibleWord(word1) {
    let lastPartOfWord1 = word1.substr(word1.length - numOfHiddenLetters);
    for (let word of words) {
        let word2 = word.trim();
        if (isValidPair(word1, lastPartOfWord1, word2)) return word2;
    }
    return null;
}
```

`findPairWord` forsøker å finne et ord som, sammen med ord én, utgjør et gyldig ordpar:
1. Lager en streng av de skjulte bokstavene i ord én.
2. Itererer over hvert ord i ordlisten.
3. Dersom ord to og ord én utgjør et gyldig par, returneres ord to.
4. Hvis ingen gyldige ord ble funnet, returneres `null`.

```js
function isValidPair(word1, lastPartOfWord1, word2) {
    return wordIsLongEnough(word2) 
        && word2 != word1 
        && word2.startsWith(lastPartOfWord1)
}
```
`isValidPair` sjekker om to ord utgjør et gyldig ordpar med tre sjekker:
1. Er ord to langt nok?
2. Er ordene forskjellige?
3. Er starten på ord to lik slutten på ord én?

Hvis svaret på alle er ja, returneres `true`.
```js
function createWordPairHtml(word1, word2) {
    let firstPartOfWord1 = word1.substr(0, word1.length - numOfHiddenLetters);
    let lastPartOfWord2 = word2.substr(numOfHiddenLetters);
    let placeholderHiddenLetters = "_".repeat(numOfHiddenLetters);

    return /*HTML*/`
        <div>
            ${firstPartOfWord1}${placeholderHiddenLetters} ${placeholderHiddenLetters}${lastPartOfWord2}
            <button onclick="this.innerHTML = '${word1} ${word2}'">?</button>
        </div>
    `;
}
```
`createWordPairHtml` tar inn et ordpar og genererer en HTML-streng i tre steg:
1. Lager en `string` bestående av ord én uten de skjulte bokstavene på slutten.
2. Lager en `string` bestående av ord to uten de skjulte bokstavene i starten.
3. Lager en `string` med antall understreker lik verdien til `numOfHiddenLetters`.
4. Konstruerer og returnerer en `div` som viser de to ordene med understreker hvor de manglende bokstavene er, samt en knapp som har teksten '?'. Hvis vi klikker på knappen, endres teksten til å vise hele ord én og ord to.

#### Refaktorering

Refaktorering vil si å endre koden uten å endre funksjonaliteten, feks å lage beskrivende navn på funksjoner, variabler og konstanter, dra prosedyrer ut i egne funksjoner og sørge for at man ikke gjentar kode for samme formål.

###### Fordeler:
- Enklere å lese og forstå koden.
- Enklere å teste.
- Enklere å vedlikeholde.

###### Ulemper:
- Tar tid.
- Kan introdusere feil.
