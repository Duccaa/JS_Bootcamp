// Funkcija (komponenta) Launch vraca html element

export const Launch = (launch) => {
    // launch.launch_year
    // launch.rocket.rocket_name
    // launch.links.mission_patch // slika
    const launchDiv = document.createElement('div')
    launchDiv.className = 'launch'

        const innerDiv0 = document.createElement('div')
        innerDiv0.className = 'inner-div-0'
            const image = document.createElement('img')
            image.src = launch.links.mission_patch
        innerDiv0.appendChild(image)

        const innerDiv1 = document.createElement('div')
        innerDiv1.className = 'inner-div-1'
        innerDiv1.innerHTML = `<span>${launch.rocket.rocket_name}</span>`
        //     const span1 = document.createElement('span')
        //     span1.textContent = launch.rocket.rocket_name
        // innerDiv1.appendChild(span1)

        const innerDiv2 = document.createElement('div')
        innerDiv2.className = 'inner-div-2'
        innerDiv2.innerHTML = `<span>${launch.launch_year}</span>`
        //   const span2 = document.createElement('span')
        //     span2.textContent = launch.launch_year
        // innerDiv2.appendChild(span2)

    launchDiv.append(innerDiv0, innerDiv1, innerDiv2)        
    return launchDiv  
}

 // launchDiv.innerHTML = `
    // <div class="inner-div-0">
    //     <img src="${launch.links.mission_patch}" alt="">
    // </div>
    // <div class="inner-div-1">
    //     <span>${launch.rocket.rocket_name}</span>
    // </div>
    // <div class="inner-div-2">
    //     <span>${launch.launch_year}</span>
    // </div>
    // `