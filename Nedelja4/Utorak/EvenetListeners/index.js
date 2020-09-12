const dugme = document.getElementById('dugme')
const count = document.getElementById('count')

let i = 0

//u zagradi su 2 parametra: koji dogadjaj slusamo i fukcija koja treba nesto da radi
//konkretno za dugme imamo klik, imamo hover kad predjemo misem preko, on mouse in, on mouse out (kad mis dodje do toga, kada se udalji)
//ono sto se automatski prosledjuje funkciji jeste dogadjaj, odnosno taj neki event
// event je objekat koji sadrzi puno informacija o tom dogadjaju i mozemo da koristimo te info
// da bi smo videli koje su to info mozemo da konzollogujemo event
// informacija koju cemo najcesce koristiti jeste nad kojim elem se desio taj dogadjaj
// jer mozemo da imamo 20 dugmica na stranici i svaki ce imati neki eventListener click
// i da bi smo znali tacno nad kojim je i u kom trenutku se desio klik imamo event koji se prosledjuje samoj funkciji
dugme.addEventListener('click', (event) => {
    // console.log('kliknuto')
    // console.log(event)
    i++
    count.textContent = 'Klinkuto je: ' + i
    // console.log(event.target) // ovo je elem nad kojim se desio dogadjaj
    // to nam je znacajno kad imamo vise dugmica da znamo nad kojim se event desio
    // npr kad imamo x o, imamo 9 dugmica i jako nam je bitno gde se desio dogadjaj
})

const forma = document.querySelector('#form')
const inputUsername = document.querySelector('#username')
const sb = document.querySelector('#select')

forma.addEventListener('submit', (e) => { // kada submitujes onda nesto...
    e.preventDefault() // sprecavamo difoltno ponasanje, vise ne salje odmah na server kada se submituje, sprecava se defolt action
    // console.log('nesto')
    console.log(inputUsername.value) // na ovaj nacin uzimamo vrednost iz ovog inputa
    console.log(sb.value) // zelimo kad kliknemo dugme, tj kad submitujemo formu,da uzmemo i ovu vrednost
})
