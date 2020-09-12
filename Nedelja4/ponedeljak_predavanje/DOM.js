//Document object model 
//sluzi nam da opisemo neku html strukturu pomocu java scripta
//dokument se najcesce odnosi na html, object to su objekti i model modelujemo html preko nekih objekata
//node je cvor, specijalna vrsta objekta, gde se sadzi svasta, informacije ko mu je roditelj i o direktnoj deci, kao i o sibilings
//ako se nalazimo u nekom nodu onda mozemo da se vratimo do roditelja, da odemo do dece

//nacini selectovanja html elemenata:
// 1. preko id 
const divHello = document.getElementById('hello')
console.log(divHello)
divHello.id = 'NESTO' //ovde smo mu promenili id
//atribut menjamo tako sto na nziv konstante dodamo tacku pa ime atributa i dodelimo novu vrednost
// divHello.className = '' kada menjamo klasu dodajemo className, ne samo klasa
// ako imamo sliku mozemo da menjamo .src moze i .alt ...
//p je paragraph, a ps je paragraphs, a mogli smo da pisemo paragrafi

// 2. preko classe const 
const ps = document.getElementsByClassName('paragraf')
console.log(ps[0]) // selektovali smo ih sve, a konzollogujemo samo prvi, kao kod bilo kog niza
//  p je paragraf, a s ukazuje na mnozinu (mogli smo umesto ps da pisemo i pragraphs)
//  posto se klasa odnosi na vise elemenata vazno je pisati getElements, 
//  da bi nam selektovao sve elemente sa tom klasom
//  da smo napisali getElementByClassName, selektovao bi samo prvi element koji ima tu klasu ?nisam sigurna da li je ovo tacno
// sa sa tako selktovanim paragrafima mozemo da radimo sta god, da idemo petljom kroz njih ..

// 3. preko kveri selektora
const div2 = document.querySelector('.hello2')  
console.log(div2)
//gornji primer selektuje samo jedan elem, prvi koji ispunjava css selektor, donji selektuje listu elemenata sa tim selektorom
const paragrafiTest = document.querySelectorAll('.paragraf')
console.log(paragrafiTest)
// sa kveri koristimo selektore kao u css (.za klasu, # za id)

// 4. getElementByTagName ovim targetujemo sve tagove (niz njih) 
// i ako onda hocemo neki specifican stavimo mu i br indexa. npr body[0]
/* sad ne moze const*/ let body = document.getElementsByTagName('body')
let body = body[0]
body[0].appendChild(...)

/////////////////////////////////////////////////////////////////////////////////

console.log(divHello.parentElement) // parent elem nije funkcija nego properti; sada smo isli do roditelja divHello elem
console.log(divHello.children) // ovde smo isli do njegove dece
//ima .firstChild ili .lastChild
console.log(divHello.previousElementSibling) // do prethodnog rodjaka
console.log(divHello.nextElementSibling)  
console.log(divHello.previousElementSibling.previousElementSibling) //ako nema pisace null (nema te vrednost)

// sad kad smo selektovali npr decu, to je lista sa kojom opet nesto mozemo da radimo
//divHello.children.forEach()

////////////////////////////////////////////////////////////////////////////////

const noviParagraf = document.createElement('p') // u zagradi pisemo koji tag hocemo da napravimo
noviParagraf.id = 'novi-paragraf'
noviParagraf.className = 'paragraf' //ako je vise klasa idu razmaci izmedju
noviParagraf.innerHTML = 'Hello from JS <li>haha</li>' //ne posmatra ga kao obican tekst on ce to posmatrati kao html strukturu
noviParagraf.innerText = 'Hello from JS <li>haha</li>' // ovde posmatra kao obican tekst i videce se li
noviParagraf.textContent = 'Hello from JS' // isto kao obican tekst, ovo je najprikladnije kada se ubacuje text
div2.appendChild(noviParagraf) //  na div2 element dodaje noviParagraf element kao poslednji

//apend before