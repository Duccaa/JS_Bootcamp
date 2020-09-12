let imenik = [
    {
        name: 'Пера',
        number: '+381 614567891'
    },
    {
        name: 'Жика',
        number: '+381 614567821'
    },
    {
        name: 'Габријела',
        number: '+381 618797821'
    },
    {
        name: 'Максимилијан',
        number: '+381 619871451'
    },
    {
        name: 'Брица',
        number: '+381 678997821'
    },
    {
        name: 'Перица',
        number: '+381 674444821'
    }
]

const forma = document.querySelector('#forma')
const inputName = document.querySelector('#input-name')
const inputNumber = document.querySelector('#input-number')
const lista = document.querySelector('.imenik')
const inputFilter = document.querySelector('#filter')

const renderList = (list) => {
    lista.innerHTML = ''

    list.forEach(item => {
        let p = document.createElement('p')
        p.textContent = `${item.name} | ${item.number}`
        lista.appendChild(p)
    })
}

const isValid = (name, number) => name != '' &&
    number != '' &&
    number[0] == '+' &&
    number.length == 13 &&
    !Number.isNaN(Number(number.slice(1)))

const isDuplicate = (name) => imenik.some(item => item.name == name)

const errorMessage = (name, number) => {
    let message = ''
    if (name == '' || number == '') {
        message += 'Поља не смеју бити празна'
    }
    else if (number[0] != '+') {
        message += 'Телефон мора бити унет у формату +xxx xxxxxxxxx '
    }
    else if (number.length != 13) {
        message += 'Поље са бројем телефона има 12 караткера (не рачунајући +) '
    }
    else if (Number.isNaN(Number(number.slice(1)))){
        message += 'Поље са бројем мора садржати само бројеве'
    }

    let p = document.createElement('p')
    p.textContent = message

    document.querySelector('body').appendChild(p)

    setTimeout(() => {
        p.remove()
    }, 1000);

}

const addItem = (name, number) => {
    if (isValid(name, number)) {
        if (isDuplicate(name)) {
            if (confirm(`Да ли желите да замените број корисника ${name}`)) {
                let index = imenik.findIndex(item => item.name == name)
                imenik.splice(index, 1, { name, number })
            }
        }
        else {
            imenik.push({ name, number })
        }
    }
    else {
        console.log('грешка')
        errorMessage(name,number)
    }

    renderList(imenik)
}

forma.addEventListener('submit', e => {
    e.preventDefault()
    addItem(inputName.value.trim(), inputNumber.value.trim())
})

inputFilter.addEventListener('input',(e) => {
    e.target.value ? renderList(imenik.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))) 
                   : renderList(imenik)
})

renderList(imenik)