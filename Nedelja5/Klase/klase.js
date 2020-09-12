// let pravougaonik1 = {
//     duzina: 10, // ovo su poja, informacije koje opisuju objekat
//     sirina: 5,
//     povrsina: function() { //metode su funkcije koje su na samom objektu, funkcionalosti objekata nesto sto oni mogu da rade]
//         console.log(this.duzina * this.sirina); //kljucna rec this govori da se funkcija odnosi na ovu instancu ovaj objekat
//     }                                           // na objekat koji ce biti napravljen, this postaje objekat koji se pravi u tom trenutku
// }

// pravougaonik1.povrsina()

// let pravougaonik2 = {
//     duzina: 15,
//     sirina: 5,
//     povrsina: function() {
//         console.log(duzina * sirina);
//     }
// }

// let pravougaonik3 = {
//     duzina: 8,
//     sirina: 5,
//     povrsina: function() {              
//         console.log(duzina * sirina);
//     }
// }

// da ne bi smo pravili iste objekte rucno, pogotovo ako ih ima puno mozemo da napravimo jedan sablon po kome cemo da pravimo objekte
// klase se prave za grupu objekata koji mogu da imaju iste osobine, iste metode i svi rade po nekom sablonu samo menjaju parametere

// class Pravougaonik {  //konvencija je da ime klase pocinje velikim slovom
//     constructor(a, b) { //poziva se pri pravljenju objekta i daje mu pocetne vrednosti kada se napravi, to je specijalna funkcija koja kreira objekat
//         this.sirina = a     //this postaje objekat koji pravimo
//         this.duzina = b
//     }   
//     get duz () {               // geter samo vraca info o nekom propertiju
//         return this.duzina    // get funkcija ne moza isto da se zove kao polje, obicaj je da se polje imenuje sa donjom crtom
//     }                        // npr this._sirina, a onda get sirina
//     get sir() {
//         return this.sirina
//     }

//     set duz(duzina) {      // seter postavlja properti na nesto, posto postavljamo na nesto u zagradi mora parametar
//         this.duzina = duzina   
//     } 

//     povrsina() {
//         return this.sirina * this.duzina
//     }

//     obim() {
//         return this.sirina * 2 + this.duzina * 2
//     }

//     opis() {
//         console.log(this);
//         return `Pravougaonik sirine ${this.sirina} i duzine ${this.duzina}`
//     }
// } 

// let p1 = new Pravougaonik(3, 4) // sa kljucnom reci new se poziva konstruktor, kreiraju se objekti, pa ime klase, i zagrade koje su poziv konstruktora
// let p2 = new Pravougaonik (5, 2)
// console.log(p1.sirina);
// console.log(p2.duzina);
// console.log(p1.povrsina());
// console.log(p2.povrsina());
// console.log(p1.obim());
// console.log(p2.obim());
// console.log(p2.opis());
// console.log(p1.duz); // geter pozivamo bez zagrade, ponasa se kao properti a ne kao funkcija
// p1.duz = 2              // ovo je vezano za seter, ovako smo promenli duzinu pravpugaonika 
// console.log(p1.opis());

//geteri i seteri su metode samo se ponasaju kao properti, mogu da se pozivaju isto kao properti
//sa njima dohvatamo, postavljamo i menjamo polja objekta
// korisno je kada su polja objekta privatna, i ne mogu da se menjaju direktno, nego ih menjamo pomocu ovih metoda 
//kada imamo get smemo samo da dohvatamo, a kada imamo set mozemo da menjamo
// ako nemamo set, get se ponasa kao konstanta 
// npr za username i password, user name ce da ima get jer nema potrebe da se menja, samo moze da se vidi
// a password samo set, jer ako korisnik zaboravi lozinku potrebno je ponovo da je setujemo, a ne moze da se vidi
// enkapsulacija, ucaurenje 
// oop, objektno orijentisano programiranje, potrebna teorija

//napraviti klasu Sastojak koja sadrzi polja: ime kolicina i cena i ima metodu koja racuna ukupnu cenu

class Sastojak {
    constructor(ime, kolicina, cena) {
        //ovde odmah mozemo da proverimo da li su validni parametri if...
        this.ime = ime
        this.kolicina = kolicina
        this.cena = cena
    }

    ukupnaCena() {
        return this.kolicina * this.cena
    }

    ispis() {
        // console.log(`Sastojak: ${this.ime}, cena: ${this.cena} i kolicaina: ${this.kolicina}`); 
        return `Sastojak: ${this.ime}, cena: ${this.cena} i kolicina: ${this.kolicina}`
    }
    
}

let sastojak1 = new Sastojak('kisela pavlaka', 1, 50)
let sastojak2 = new Sastojak('sir', 1, 100)
let sastojak3 = new Sastojak('origano', 2, 17)
let sastojak4 = new Sastojak('integralni hleb', 1, 120)
let sastojak5 = new Sastojak('patlidzan', 2, 20)
let sastojak6 = new Sastojak('djumbir', 3, 18)

let s1 = new Sastojak('secer', 1, 80)
let s2 = new Sastojak('jaje', 3, 10)
let s3 = new Sastojak('cokolada', 2, 100)
let s4 = new Sastojak('vanilin secer', 2, 20)
let s5 = new Sastojak('mleko', 1, 150)

let sastojci = [sastojak1, sastojak2, sastojak3, sastojak4, sastojak5, sastojak6]
let sastojci2 = [s1, s2, s3, s4, s5]

sastojci.forEach(sastojak => {
    sastojak.ispis()
})

class Recept {
    constructor(naziv, tezina, sastojci) {
        this.naziv = naziv
        this.tezina = tezina
        this.sastojci = sastojci
    }
    ispis() {
        console.log(`Naziv recepta: ${this.naziv}, tezina pravljenja: ${this.tezina}, sastojci: ${this.sastojci.map(el => el.ispis())}`)
    }
    ukupnaCenaRecepta() {
        let suma = 0
        this.sastojci.forEach(sastojak => {
            suma += sastojak.ukupnaCena()
        })
        return suma

    //    return this.sastojci.reduce((total, num) => total + num.ukupnaCena(), 0)
    }

}

let rec1 = new Recept('Sendvic sa djumbirom', 'pocetni', sastojci1)
rec1.ispis()
console.log(rec1.ukupnaCenaRecepta())

let rec2 = new Recept('mafini', 'pocetni', sastojci2)
let rec3 = new Recept('treci', 'tezak', sastojci2)

let recepti = [rec1, rec2, rec3]
recepti.filter(rec => rec.tezina === 'pocetni').forEach(el => {
    console.log(el.ukupnaCenaRecepta())
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Figura {
    construktor(boja) {
        this.boja = boja
    }
    getPovrsina(){
        return
    }
    getObim() {
        return
    }
}
// nasledjivanje, krug moze da nasledi figuru, on je zapravo podvrsta figure, ima isti properti a to je boja
class Krug extends Figura { // extends je kljucna rec
    constructor(boja, r) {
        super(boja) //ovde pozivamo sa super konstruktor figure, to je super klasa, figura je super klasa kruga, odn roditeljska klasa
        this.r = r // poluprecnik je ono vise sto krug ima u odnosu na figuru, ima sve sto ima figura i nesto vise
    }
    getPovrsina() {
        return this.r  **  2 * Math.PI
    }
    getObim() {
        return this.R * 2 * Math.PI
    }
}

class Pravouganik extends Figura {
    constructor(a, b, boja) {
        super(boja) // super konstruktor uvek mora prvi da se pozove
        this.a = a
        this.b = b
    }
    getPovrsina() {
        return this.a * this.b
    }
    getObim() {
        return 2 * this.a + 2 * this.b
    }
}

class Kvadrat extends Pravouganik {
    constructor(a, boja) {
        super(a, a, boja)
    }
}

let f1 = new Figura('crvrna')
let f2 = new Krug('plava', 2)
let f3 = new Pravouganik(2, 4, 'crn')
let f4 = new Kvadrat(3, 'bela')

console.log(f1.getPovrsina())
console.log(f2.getPovrsina())

let figure = [f1, f2, f3, f4]
figure.forEach(oblik => {
    console.log(oblik.getPovrsina(), oblik.getObim())
})
