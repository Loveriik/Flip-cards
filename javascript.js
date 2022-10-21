let bank = []
let cardId

const wallpaperStorage18 = [
    {src:'Slots wallpaper/img1.jpg', name:'one'}, 
    {src:'Slots wallpaper/img1.jpg', name:'one'},
    {src:'Slots wallpaper/img2.jpg',name:'two'},
    {src:'Slots wallpaper/img2.jpg',name:'two'},
    {src:'Slots wallpaper/img3.jpg',name:'three'},
    {src:'Slots wallpaper/img3.jpg',name:'three'},
    {src:'Slots wallpaper/img4.jpg',name:'four'},
    {src:'Slots wallpaper/img4.jpg',name:'four'},
    {src:'Slots wallpaper/img5.jpg',name:'five'},
    {src:'Slots wallpaper/img5.jpg',name:'five'},
    {src:'Slots wallpaper/img6.jpg',name:'six'},
    {src:'Slots wallpaper/img6.jpg',name:'six'},
    {src:'Slots wallpaper/img7.jpg',name:'seven'},
    {src:'Slots wallpaper/img7.jpg',name:'seven'},
    {src:'Slots wallpaper/img8.jpg',name:'eight'},
    {src:'Slots wallpaper/img8.jpg',name:'eight'},
    {src:'Slots wallpaper/img9.jpg',name:'nine'},
    {src:'Slots wallpaper/img9.jpg',name:'nine'}]
    
const wallpaperStorage24 = [
    {src:'Slots wallpaper/img1.jpg', name:'one'}, 
    {src:'Slots wallpaper/img1.jpg', name:'one'},
    {src:'Slots wallpaper/img2.jpg',name:'two'},
    {src:'Slots wallpaper/img2.jpg',name:'two'},
    {src:'Slots wallpaper/img3.jpg',name:'three'},
    {src:'Slots wallpaper/img3.jpg',name:'three'},
    {src:'Slots wallpaper/img4.jpg',name:'four'},
    {src:'Slots wallpaper/img4.jpg',name:'four'},
    {src:'Slots wallpaper/img5.jpg',name:'five'},
    {src:'Slots wallpaper/img5.jpg',name:'five'},
    {src:'Slots wallpaper/img6.jpg',name:'six'},
    {src:'Slots wallpaper/img6.jpg',name:'six'},
    {src:'Slots wallpaper/img7.jpg',name:'seven'},
    {src:'Slots wallpaper/img7.jpg',name:'seven'},
    {src:'Slots wallpaper/img8.jpg',name:'eight'},
    {src:'Slots wallpaper/img8.jpg',name:'eight'},
    {src:'Slots wallpaper/img9.jpg',name:'nine'},
    {src:'Slots wallpaper/img9.jpg',name:'nine'},
    {src:'Slots wallpaper/img10.jpg',name:'ten'},
    {src:'Slots wallpaper/img10.jpg',name:'ten'},
    {src:'Slots wallpaper/img11.jpg',name:'eleven'},
    {src:'Slots wallpaper/img11.jpg',name:'eleven'},
    {src:'Slots wallpaper/img12.jpg',name:'twelve'},
    {src:'Slots wallpaper/img12.jpg',name:'twelve'}]
    
const wallpaperStorage30 = [
    {src:'Slots wallpaper/img1.jpg', name:'one'}, 
    {src:'Slots wallpaper/img1.jpg', name:'one'},
    {src:'Slots wallpaper/img2.jpg',name:'two'},
    {src:'Slots wallpaper/img2.jpg',name:'two'},
    {src:'Slots wallpaper/img3.jpg',name:'three'},
    {src:'Slots wallpaper/img3.jpg',name:'three'},
    {src:'Slots wallpaper/img4.jpg',name:'four'},
    {src:'Slots wallpaper/img4.jpg',name:'four'},
    {src:'Slots wallpaper/img5.jpg',name:'five'},
    {src:'Slots wallpaper/img5.jpg',name:'five'},
    {src:'Slots wallpaper/img6.jpg',name:'six'},
    {src:'Slots wallpaper/img6.jpg',name:'six'},
    {src:'Slots wallpaper/img7.jpg',name:'seven'},
    {src:'Slots wallpaper/img7.jpg',name:'seven'},
    {src:'Slots wallpaper/img8.jpg',name:'eight'},
    {src:'Slots wallpaper/img8.jpg',name:'eight'},
    {src:'Slots wallpaper/img9.jpg',name:'nine'},
    {src:'Slots wallpaper/img9.jpg',name:'nine'},
    {src:'Slots wallpaper/img10.jpg',name:'ten'},
    {src:'Slots wallpaper/img10.jpg',name:'ten'},
    {src:'Slots wallpaper/img11.jpg',name:'eleven'},
    {src:'Slots wallpaper/img11.jpg',name:'eleven'},
    {src:'Slots wallpaper/img12.jpg',name:'twelve'},
    {src:'Slots wallpaper/img12.jpg',name:'twelve'},
    {src:'Slots wallpaper/img13.jpg',name:'thirteen'},
    {src:'Slots wallpaper/img13.jpg',name:'thirteen'},
    {src:'Slots wallpaper/img14.jpg',name:'fourteen'},
    {src:'Slots wallpaper/img14.jpg',name:'fourteen'},
    {src:'Slots wallpaper/img15.jpg',name:'fifteen'},
    {src:'Slots wallpaper/img15.jpg',name:'fifteen'}
]

function start(dataBase,number) {
    const c = document.querySelector('.onload')
    c.style.display = 'none'
    const cc = document.querySelector('.cards__container')
    cc.style.display = 'grid'
    creation (number)
    preparingCards(dataBase)
    preparation()
}

function creation (n) {

    const container = document.querySelector('.cards__container')
    let firstCard
    let cardBody
    let cardFront
    let image
    let cardBack
    let image2

    for (i = 0; i <= n; i++) {
        firstCard = document.createElement('div')
        firstCard.classList.add('card')
        container.appendChild(firstCard)
        cardBody = document.createElement('div')
        cardBody.classList.add('card__body')
        cardBody.addEventListener('click', flipCards)
        firstCard.appendChild(cardBody)

        cardFront = document.createElement('div')
        cardFront.classList.add('card__front')
        cardBody.appendChild(cardFront)
        image = document.createElement('img')
        image.src = 'Slots wallpaper/front.jpg'
        cardFront.appendChild(image)

        cardBack = document.createElement('div')
        cardBack.classList.add('card__back')
        cardBody.appendChild(cardBack)
        image2 = document.createElement('img')
        image2.src = 'Slots wallpaper/img1.jpg'
        image2.classList.add('help')
        cardBack.appendChild(image2)
    }  
}

function preparingCards(wallpaperStorage) {
    let a
    const storage = document.querySelectorAll('.help')
    storage.forEach(storage => {
        a = wallpaperStorage.splice(Math.floor(Math.random()*wallpaperStorage.length),1)
        storage.src = a[0].src
        storage.name = a[0].name
    })
}

function preparation() {
    let cards = document.querySelectorAll('.card__body')
    cards.forEach(cards => {
        cards.addEventListener('click', function(e){
            cards.classList.toggle('flip')
            })
    })
}

function flipCards(){
    cardId = this
    bank.push(cardId)

    const card1 = bank[0]
    const card2 = bank[1]

    if (bank.length === 1) {
        card1.classList.add('disable')
    } else if (bank.length === 2) {
        setTimeout(() => checkForMatch(card1,card2), 700)
        bank = []
    }
}

function checkForMatch(card1,card2) {
    if (card1.querySelector('.help').name === card2.querySelector('.help').name) {
        card1.querySelector('.help').src = ''
        card2.querySelector('.help').src = ''
        card1.querySelector('.help').classList.add('correct__answer')
        card2.querySelector('.help').classList.add('correct__answer')
    } else {
        card1.classList.toggle('flip')
        card1.classList.remove('disable')
        card2.classList.toggle('flip')
    }
}

function newGame() {
    location.reload()
}