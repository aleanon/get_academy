## <p style="text-align: center;">Oppgave 1b</p>

Vi tester om `isPalindrome()` returnerer `true` for et palindrom, uansett om det er et ord eller en setning, om det har store og små bokstaver, eller om det inkluderer ikke-bokstavtegn.

```js
QUnit.test('A: anna', function (assert) {
    assert.true(isPalindrome('anna'));
});

QUnit.test('B: eva', function (assert) {
    assert.false(isPalindrome('eva'));
});
```
'A' og 'B' sjekker at et en-ords palindrom gjenkjennes korrekt.

```js
QUnit.test('C: mormor ellemeller om rom', function (assert) {
    assert.true(isPalindrome('mormor ellemeller om rom'));
});

QUnit.test('D: morfar ellemeller om rom', function (assert) {
    assert.false(isPalindrome('morfar ellemeller om rom'));
});
```
'C' og 'D' sjekker at setningspalindromer gjenkjennes korrekt. 

```js
QUnit.test('E: Agnes i senga', function (assert) {
    assert.true(isPalindrome('Agnes i senga'));
});

QUnit.test('F: Agnes i sengen', function (assert) {
    assert.false(isPalindrome('Agnes i sengen'));
});
```
'E' og 'F' verifiserer at isPalindrome() er case-insensitive, det vil si at store og små bokstaver behandles likt.

```js
QUnit.test('G: Anna, Durek er udanna!', function (assert) {
    assert.true(isPalindrome('Anna, Durek er udanna!'));
});

QUnit.test('H: Anne, Durek er udanna!', function (assert) {
    assert.false(isPalindrome('Anne, Durek er udanna!'));
});
```
'G' og 'H' sjekker at tegn som ',' og '!' filtreres bort i palindrome-sjekken.

```js
QUnit.test('I: En ranet Unni sier: Stas at rom-nissen ga dem et ømt møte med Agnes sin mor. Ta sats, reis inn uten Arne!',
function (assert) {assert.true(isPalindrome('En ranet Unni sier: Stas at rom-nissen ga dem et ømt møte med Agnes sin mor. Ta sats, reis inn uten Arne!'));
});
```
'I' sjekker at '.', ':' og '-' også filtreres bort.
