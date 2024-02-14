const cardObjectDefinitions = [
    { id: 1, imagePath: '/pictures/card-KingHearts.png' },
    { id: 2, imagePath: '/pictures/card-JackClubs.png' },
    { id: 3, imagePath: '/pictures/card-QueenDiamonds.png' },
    { id: 4, imagePath: '/pictures/AceSpades.png' }
]

const cardBackImgPath = '/pictures/card-back-Blue.png'

const cardContainerElem = document.querySelector('.card-container')

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
    addSrcToElement(cardBackElem, cardBackImgPath)
    addSrcToElement(cardFrontElem, cardItem.imagePath)

    // assign class to back and front image element of back card
    addClassToElement(cardBackElem, 'card-img')
    addClassToElement(cardFrontElem, 'card-img')

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
}


// Function that allows creating elements (replace document.create) 
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