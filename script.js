const cardObjectDefinitions = [
    { id: 1, imagePath: '/pictures/card-KingHearts.png' },
    { id: 2, imagePath: '/pictures/card-JackClubs.png' },
    { id: 3, imagePath: '/pictures/card-QueenDiamonds.png' },
    { id: 4, imagePath: '/pictures/AceSpades.png' }
]

const cardBackImgPath = '/pictures/card-back-Blue.png'
const cardContainerElem = document.querySelector('.card-container')

let cards = []
const playGameButtonElem = document.getElementById('playGame')

const collapsedGridAreaTemplate = '"a a" "a a"'
const cardCollectionCellClass = ".card-pos-a"

loadGame()

function loadGame() {
    createCards()
    cards = document.querySelectorAll('.card')
    playGameButtonElem.addEventListener('click', () => startGame())
}

function startGame() {
    initializeNewGame()
    startRound()
}

function initializeNewGame() {
}

function startRound() {
    initializeNewRound()
    collectCards()
    flipCards(true)
}

function initializeNewRound() {
}

// ////////////////////////////////////// Handle Cards //////////////////////////////////////////////////////////////////

function collectCards() {
    transformGridArea(collapsedGridAreaTemplate)
    addCardToGridAreaCell(cardCollectionCellClass)
}

function transformGridArea(areas) {
    cardContainerElem.style.gridTemplateAreas = areas
}

function addCardToGridAreaCell(cellPositionClassName) {
    const cellPositionElem = document.querySelector(cellPositionClassName)
    cards.forEach((card, index) => {
        addChildElement(cellPositionElem, card)
    })
}

// Flip Card Effect
function flipCard(card, flipToBack) {
    const innerCardElem = card.firstChild
    if (flipToBack && !innerCardElem.classList.contains('flip-it')) {
        innerCardElem.classList.add('flip-it')
    }
    else if (innerCardElem.classList.contains('flip-it')) {
        innerCardElem.classList.remove('flip-it')
    }
}

function flipCards(flipToBack) {
    cards.forEach((card, index) => {
        setTimeout(() => {
            flipCard(card, flipToBack)
        }, index * 100)
    })
}
// ////////////////////////////////////// Create Cards ////////////////////////////////////////////////////////////////
function createCards() {
    cardObjectDefinitions.forEach((cardItem) => {
        createCard(cardItem)
    })
}

function createCard(cardItem) {
    // Create div elements that make up a card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    // create font and back image for card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    // add class and id to card element
    addClassToElement(cardElem, 'card')
    addIdToElement(cardElem, cardItem.id)

    // add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')

    // add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    // add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    // add src attribute and appropriate value to img element - back card & front card 
    addSrcToElement(cardBackImg, cardBackImgPath)
    addSrcToElement(cardFrontImg, cardItem.imagePath)

    // assign class to back and front image element of back card
    addClassToElement(cardBackImg, 'card-img')
    addClassToElement(cardFrontImg, 'card-img')

    // add front image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg)
    // add back image element as child element to back card element
    addChildElement(cardBackElem, cardBackImg)

    // add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)
    // add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    // add inner card element as child element to card element
    addChildElement(cardElem, cardInnerElem)

    // add card element as child element to appropriate grid cell
    addCardToGridCell(cardElem)
}


// Function qui permettent de créer des éléments (remplace document.createElement) 
function createElement(elemType) {
    return document.createElement(elemType)
}

function addClassToElement(elem, className) {
    elem.classList.add(className)
}

function addIdToElement(elem, id) {
    elem.id = id
}

function addSrcToElement(imgElem, src) {
    imgElem.src = src
}

function addChildElement(parentElem, childElem) {
    parentElem.appendChild(childElem)
}

function addCardToGridCell(card) {
    const cardPositionClassName = mapCardIdToGridCell(card)
    const cardPosElem = document.querySelector(cardPositionClassName)

    addChildElement(cardPosElem, card)
}

function mapCardIdToGridCell(card) {
    if (card.id == 1) {
        return '.card-pos-a'
    }

    else if (card.id == 2) {
        return '.card-pos-b'
    }

    else if (card.id == 3) {
        return '.card-pos-c'
    }

    else if (card.id == 4) {
        return '.card-pos-d'
    }
}