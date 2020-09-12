//Napisati funkciju koja ispisuje da li je br deljiv sa 3

function printDivisbleBy3(num) {
    if(num % 3 === 0) {
        console.log(`Broj ${num} je deljiv je sa 3`)
    } else {
        console.log(`Broj ${num} nije deljiv je sa 3`)
    }
}

/* ternarni operator
function printDivisbleBy3(num) {
    num % 3 === 0 ?
    console.log(`Broj ${num} je deljiv je sa 3`)
    :
    console.log(`Broj ${num} nije deljiv je sa 3`)
}
*/

//Napisati funkciju koja proverava da li je br deljiv sa tri (vraca true ili fallse)
{
function isDivisibleBy3(num) {
    return num % 3 === 0
}
}
// napisati program koji izracunava zbir br deljivih sa 3 od 1 do N
{
let N = 100
let zbir = 0
for(let i = 1; i < N; i++) {
    if(isDivisibleBy3(i)) {
        zbir += i
    }
}
console.log(zbir);
for(let i = 1; i < N; i++) {
    console.log(printDivisbleBy3(i))
} 
}

// jelkica
function red(znak, N) {
    return znak.repeat(N)
}
function trougao(visina) {
    let trougao = ' '
    for (let i = 1; i <= visina; i++) {
        trougao += ' '.repeat(50 - visina) + ' '.repeat(visina - i) + red('*', 2 * i - 1) + '\n'
    }
    return trougao;
}

//console.log(trougao(2) + trougao(3) + trougao(4));

let slika = ''
for (let i = 2; i < 30; i++) {
    slika += trougao(i);
}
console.log(slika);