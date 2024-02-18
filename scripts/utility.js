

function getIntegerValue(id) {

    return parseInt(document.getElementById(id).innerText)

}

function setText(id, value) {

    document.getElementById(id).innerText = value


}

function displayResult(seatName) {
    let display = document.getElementById('display-price')

    let li = document.createElement('li')



    let p1 = createNewElem('p', seatName)

    let p2 = createNewElem('p', 'Economy')


    let p3 = createNewElem('p', 550)


    li.appendChild(p1)
    li.appendChild(p2)
    li.appendChild(p3)
    display.appendChild(li)

}


function createNewElem(tag, value) {

    let p = document.createElement(tag);

    p.innerText = value

    return p


}

function calculateDiscount(amount) {

    let discount = document.getElementById('discounted-price')

    let totalPrice = getIntegerValue('total-price')

    let p1 = createNewElem('p','Discounted Price ')
    discount.appendChild(p1)

    let p2 = document.createElement('p')

    discountedPrice = totalPrice * amount

    p2.innerText = discountedPrice

    discount.appendChild(p2)
    setText('grand-price', totalPrice - discountedPrice)
}
