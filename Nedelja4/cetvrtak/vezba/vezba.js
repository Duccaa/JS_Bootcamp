let posts = [
    {
        text: 'neki text 1',
        postImg: 'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
        likes: 3,
        comments: ['com1', 'com2']
    },
    {
        text: 'neki text 2',
        postImg: 'https://purepng.com/public/uploads/large/purepng.com-mariomariofictional-charactervideo-gamefranchisenintendodesigner-1701528634653vywuz.png',
        likes: 0,
        comments: []
    },
    {
        text: 'neki text 3',
        postImg: 'https://i.stack.imgur.com/ILTQq.png',
        likes: 10,
        comments: []
    }
]

const divPosts = document.querySelector('#posts')

function update (posts) {
    divPosts.innerHTML = ''
    posts.sort((a ,b) => b.likes - a.likes)

    posts.forEach(post => {

        const p = document.createElement('p')
        p.textContent = post.text

        const img = document.createElement('img')
        img.src = post.postImg
        img.width = '50'
        
        const likes = document.createElement('div')
        const pLike = document.createElement('p')
        pLike.textContent = post.likes
        const btnLike = document.createElement('button')
        btnLike.textContent = 'like'
        btnLike.addEventListener('click', () => {
            post.likes++
            update(posts)
        })
        likes.append(pLike, btnLike)

        const divComm = document.createElement('div')
        divComm.textContent = post.comments 
        const inputComm = document.createElement('input')
        inputComm.type = 'text'
        inputComm.addEventListener('keypress', (e) => {
            if(e.key == 'Enter') {
                if (e.target.value.trim() != '') {
                    post.comments.push(e.target.value.trim())
                    update(posts)
                } else {
                    const p = document.createElement('p')
                    p.textContent = 'greska'
                    e.target.parentElement.appendChild(p)
                }
            }
        })
        divComm.appendChild(inputComm)

        const divPost = document.createElement('div')
        divPost.className = 'post'
        divPost.append(p, img, likes, divComm)
        divPost.addEventListener('mouseenter', () => {
            divPosts.classList.remove('zoomout')
            divPosts.classList.add('zoom')
        })
        divPost.addEventListener('mouseleave', () => {
            divPosts.classList.remove('zoom')
            divPosts.classList.add('zoomout')
        })
        divPosts.appendChild(divPosts)
    })
}
update(posts)

const search = document.querySelector('#search')
search.addEventListener('input', (e) => {
    update(posts.filter(el => el.text.includes(e.target.value)))
})

