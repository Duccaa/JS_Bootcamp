const div = document.getElementById('vezba')

const navBar =  document.createElement('nav')
const unorderedLi = document.createElement('ul')

const liItem1 = document.createElement('li')
const ancor1 = document.createElement('a')
ancor1.href = "#home"
ancor1.innerText = 'Home'
liItem1.appendChild(ancor1)

const liItem2 = document.createElement('li')
const ancor2 = document.createElement('a')
ancor2.href = "#contact"
ancor2.innerText = 'Contact'
liItem2.appendChild(ancor2)

const liItem3 = document.createElement('li')
const ancor3 = document.createElement('a')
ancor3.href = "#about"
ancor3.innerText = 'About'
liItem3.appendChild(ancor3)

unorderedLi.appendChild(liItem1)
unorderedLi.appendChild(liItem2)
unorderedLi.appendChild(liItem3)
navBar.appendChild(unorderedLi)
div.appendChild(navBar)

const forma = document.createElement('form')

const paragraf = document.createElement('p')
paragraf.innerText = 'Ovo je neki paragraf'
forma.appendChild(paragraf)

const labela = document.createElement('label')
labela.innerText = 'Choose a car:'
labela.htmlFor = 'cars'
forma.appendChild(labela)

const selektor = document.createElement('select')
selektor.name = 'cars'
selektor.id = 'cars'

const optgroup1= document.createElement('optgroup')
optgroup1.label = 'Swedish Cars'

const opcija1 = document.createElement('option')
opcija1.value = 'volvo'
opcija1.innerText = 'Volvo'
optgroup1.appendChild(opcija1)

const opcija2 = document.createElement('option')
opcija2.value = 'vsaab'
opcija2.innerText = 'Saab'
optgroup1.appendChild(opcija2)

const optgroup2 = document.createElement('optgroup')
optgroup2.label = 'German Cars'

const opcija3 = document.createElement('option')
opcija3.value = 'mercedes'
opcija3.innerText = 'Mercedes'
optgroup2.appendChild(opcija3)

const opcija4 = document.createElement('option')
opcija4.value = 'audi'
opcija4.innerText = 'Audi'
optgroup2.appendChild(opcija4)

selektor.appendChild(optgroup1)
selektor.appendChild(optgroup2)
forma.appendChild(selektor)

const imput1 = document.createElement('input')
imput1.type = 'hidden'
imput1.name = 'strana'
imput1.value = '15'
forma.appendChild(imput1)

const imput2 = document.createElement('input')
imput2.type = 'text'
imput2.name = 'nesto'
forma.appendChild(imput2)

const imput3 = document.createElement('input')
imput3.type = 'submit'
imput3.name = 'submit'
imput3.value = 'Potvrdi'
forma.appendChild(imput3)

div.appendChild(forma)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const navMenu= ['Home', 'About', 'Contant',]

const divVezba = document.querySelector('#vezba')

const navigacija = document.createElement('nav')
const lista = document.createElement('ul')


navMenu.forEach(el => {
     let li = document.createElement('li')
     let a = document.createElement('a')

     a.textContent = el
     a.href = '#' + el.toLowerCase()

     li.appendChild(a)
     lista.appendChild(li)
})

// for(let i = 0; i < 3; i++) {
//     let li = document.createElement('li')
//     let a = document.createElement('a')

// swich(i) {
//     case 0:
//         a.href = '#home'
//         a.textContent = 'Home'
//         break
//     case 1:
//          a.herf = '#about'
//          a.textContent = 'About'
//          break
//     case 3:
//          a.herf = '#contact'
//          a.textContent = 'Contact'
//          break
// }

// li.appendChild(a)
// lista.appendChild(li)
// }

navigacija.appendChild(lista)
divVezba.appendChild(navigacija)

const forma = document.createElement('form')

const par = document.createElement('p')
par.textContent = 'Ovo je neki paragraf'
forma.appendChild(par)

const labelCars = document.createElement('label')
labelCars.htmlFor = 'cars'
labelCars.textContent = 'Choose a car:'
forma.appendChild(labelCars)

const sb = document.createElement('select') // sb je select box
sb.name = 'cars'
sb.id = 'cars'

    const optGroup1 = document.createElement('optgroup')
    optGroup1.label = 'Swedish Cars'

    const swedishCars = ['Volvo', 'Saab']
    swedishCars.forEach(car => {
        const option = document.createElement('option')
        option.textContent = car
        option.value = car.toLowerCase()
        optGroup1.appendChild(option)
    })
    sb.appendChild(optGroup1)

    const optGroup2 = document.createElement('optgroup')
    optGroup1.label = 'German Cars'

    const germanCars = ['Mercedes', 'Audi']
    germanCars.forEach(car => {
        const option = document.createElement('option')
        option.textContent = car
        option.value = car.toLowerCase()
        optGroup2.appendChild(option)
    })
    sb.appendChild(optGroup2)

forma.appendChild(sb)

//input isto kao i kod mene