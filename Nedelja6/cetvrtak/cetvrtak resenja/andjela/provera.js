export const isValid = (korisnik) => {
    let message = ''
    if (korisnik.ime.trim() == '' || korisnik.telefon.trim() == '') {
        message += 'Поља не смеју бити празна. <br>'
    }
    if (korisnik.telefon.trim()[0] != '+') {
        message += 'Телефон мора бити унет у формату +xxx xxxxxxxxx. <br>'
    }
    if (korisnik.telefon.trim().length != 14) {
        message += 'Поље са бројем телефона има 12 караткера (не рачунајући +). <br>'
    }
    return message
}

export const ispisiGresku = (msg, form) => {
    const p = document.createElement('p')
    p.innerHTML = msg
    form.parentElement.insertBefore(p, form.nextSibling)
    setTimeout(() => {
        form.nextSibling.remove()
    }, 3000)
}