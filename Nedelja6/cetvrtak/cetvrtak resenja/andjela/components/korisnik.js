export const Korisnik = (korisnik) => {
    const li = document.createElement('li')
    li.textContent = korisnik.ime + ' ' + korisnik.telefon
    return li
}