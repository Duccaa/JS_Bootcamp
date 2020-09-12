import {niz, deleteById} from './todo.js'

const app = document.getElementById('app')

const renderAll = (arr) => {
    app.innerHTML = ' '

    arr.forEach(item => {
        const par = document.createElement('p')
        par.textContent = item.desc //+item.id

        const btnDel = document.createElement('button')
        btnDel.textContent = 'OBRISI'

        btnDel.addEventListener('click', () => {
            deleteById(item.id)
            renderAll(niz)
        })

        if(item.done)  // ako imamo samo jednu komandu ne moraju viticaste zagrade
            par.style.textDecoration = 'line-through'  

        par.addEventListener('click', () => {
           item.done = !item.done
            // changeById(item.id, {
            //     id: item.id,
            //     desc: item.desc,
            //     done: !item.done
            // })
            // changeById(item.id, {
            //     ...item,   // sa spread operatorom prekopiramo isti objekat i menjamo mu done, ali mozemo i bilo koji drugi properti da mu promenimo
            //     done: !item.done
            // })
            renderAll(niz)
            //console.log('kliknuto')
        })

        app.append(par, btnDel)
    })
}
renderAll(niz)

// dodati check box koji ce da menja uradjeno nije uradjeno, umesto da se klikce na paragraf