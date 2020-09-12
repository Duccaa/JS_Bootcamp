const users = [
    {
        username: 'admin',
        password: 'admin',
        isAdmin: true
    },
    {
        username: 'John',
        password: '123456',
        isAdmin: false,
        coins: 7
    },
    {
        username: 'Kelly',
        password: 'asdf1234',
        isAdmin: false,
        coins: 12
    },
    {
        username: 'Pera',
        password: '1234asdf',
        isAdmin: false,
        coins: 42
    },
    {
        username: 'Ana',
        password: 'fghfhf',
        isAdmin: false,
        coins: 31
    }
]
const divUsers = document.querySelector('#users')
const forma = document.querySelector('#login')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const loggoutButton = document.querySelector('#logout')

users.forEach(user => {
    if(user.isAdmin) return // ovako izlazimo iz funkcije, vraca undefined
    const p = document.createElement('p')
    p.textContent = user.username + ' ' + user.coins

    // const slika = document.createElement('img')
    // slika.src = user.slika

    divUsers.append(p)
})

function ulogujse() {
    forma.classList.add('hide')
    divUsers.classList.remove('hide')
    logoutButton.classList.remove('hide')
}
//trim brise space sa kraja i pocetka stringa
forma.addEventListener('submit', e => {
    e.preventDefault()
    // ni jedan input ne sme biti prazan, ne sme da sadrzi samo beline(space, tab)
    if(usernameInput.value.trim().length === 0 || passwordInput.value.trim() === ' ') {
        // console.log('ne sme ovako')
        alert('Unos ne moze biti prazan')       
        return
    }
    // console.log('ne sme ovako')

    // da li korisnik vec postoji // 
    // find vraca prvi objekat koji je ispunio uslove, ako nema vratice undefined users.find()
    // some vraca true ili false kada je neki uslov ispunjen ili nije za bilo koji elemen 
    let korisnik = users.find(user => user.username === usernameInput.value)
    console.log(korisnik)

    // sa petljom
    // let postoji = false
    // for (let i = 0; i < users.length; i++) {
    //     if(users[i].username === usernameInput.value){
    //         postoji = true
    //         break
    //     }

    // }
    // console.log(postoji)

    //ako postoji da li je sifra dobra (ako je dobra sifra ulogovati, inace ispisati poruku neku)
    if(korisnik) {
        //primer da smo radili sa some
        // users.some(user => user.username === usernameInput.value 
        //                 && user.password === passwordInput.value)
        if(korisnik.password === passwordInput.value) {
            // forma.classList.add('hide')
            // divUsers.classList.remove('hide')
            // loggoutButton.classList.remove('hide')
            ulogujse()
        } 
        else console.log('Wrong password')

    }
    //ako ne postoji napraviti novog i ulogovati ga sa tim podacima
else {
    user.push({
        username: usernameInput.value,
        password: passwordInput.value,
        isAdmin:false,
        coins: 0
    })
    const p = document.createElement('p')
    p.textContent = usernameInput.value + ' ' + 0
    divUsers.append(p)

    ulogujSe()

}
    
 })
 logoutButton.addEventListener('click', () => {
    forma.classList.remove('hide')
    divUsers.classList.add('hide')
    logoutButton.classList.add('hide')
})

   
