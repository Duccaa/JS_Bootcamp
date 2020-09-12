import { Korisnik } from './components/korisnik'
import { isValid, ispisiGresku } from './provera'

const form = document.querySelector('#form')
const imeIprezime = document.querySelector('#ime')
const telefon = document.querySelector('#telefon')
const lista = document.querySelector('ul')

let korisnici = []

const renderujListu = (korisnici) => {
    lista.innerHTML = ''
    korisnici.forEach(korisnik => {
        lista.appendChild(Korisnik(korisnik))
    })
}

const dodajKorisnika = (korisnik) => {
    let index = korisnici.findIndex(el => el.ime == korisnik.ime)
    if (index != -1) {
        if (confirm('Vec postoji , da li zelite da zamenite broj?')) {
            korisnici[index].telefon = korisnik.telefon
            renderujListu(korisnici)
        }
    } else {
        korisnici.push(korisnik)
        renderujListu(korisnici)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let korisnik = {
        ime: imeIprezime.value.trim(),
        telefon: telefon.value.trim()
    }

    let msg = isValid(korisnik);
    (msg == '') ? dodajKorisnika(korisnik) : ispisiGresku(msg, form)
})

imeIprezime.addEventListener('input', () => {
    renderujListu(korisnici.filter(korisnik => korisnik.ime.includes(imeIprezime.value)));
})