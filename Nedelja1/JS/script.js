console.log("Hello World!")

// = operator dodele
// promenljive
var x // deklaracija promeljive x
x = 4 // definicija promenljive x
let y = 5 // deklaracija i definicija promenljive y
const z = 6
console. log (x,y,z)

// let a = x + y // a has already been declared

// tipovi podataka
// Number, String (to je tekst, ide u navodnike), Boolean (true/false)
// NaN je not a number, predstavlja vrednost koja bi trebala da bude broj, a ne može da se predstavi brojem

// var x
// let x
// const x

// doseg (scope) gde je promenljiva vidljiva
// doseg vidljivosti promenljive

var // vidi se u celom fajlu (globalno)
/* blok koda 
{
    let z = 5 // vidi se lokalno, samo u skopu gde je deklarisana, ako probamo z da pristupimo izvan njegovog skopa, pisaće da nije definisana
    var x = "hello" // ovo će biti vidljivo i globalno, možemo pristupiti bilo odakle
}*/

var x = 5
x = 3 // var može da se menja
console.log(x) // vidi se u scopeu u kom se nalazi

const y = 4
// y = 2 // const ne može da se menja
console. log(y)

let z = 7
z = 4 // let može da se menja
console.log(z)
{
   var x2= 5 
}
console.log(x2) // var vidi se i izvan scopa u kom je napravljen
{
    y2=3
}
console.log(y2); // const se vidi van scopa
{
    let z2 =5
}
// console.log(z2); // let se ne vidi van scopa

// Number("423") - eksplicitna konverzija
//"42" - 3 - implicitna konverzija (nism0 mu mi rekli da je to br, on samostalno pokušava to da uradi)

// jedna promenljiva ne može da se deklariše više puta
// ime promenljive ne može početi sa br, može biti donja crta, slovo...