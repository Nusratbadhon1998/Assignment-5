
// Banner Card Design Using JS for trying purpose
let bannerCardsContainer = document.getElementsByClassName('banner-card')

for (const card of bannerCardsContainer) {
    card.style.backgroundColor = "white",
        card.style.padding = "15px",
        card.style.borderRadius = "10px",
        card.style.marginRight = "45px",
        card.style.borderBottom = "5px solid rgb(29, 209, 0)"

}

// ---------------------------------------------------------------------------------------------------
let arr = [];
// get all seat
let seats = document.getElementsByClassName('seat')

for (const seat of seats) {


    seat.addEventListener('click', function (e) {

        seat.setAttribute("disabled", true)

        let seatName = seat.innerText

        // Displaying Seat name price and class
        displayResult(seatName)

        arr.push(seat.innerText)

        if (arr.length === 4) {
            let applyBtn = document.getElementById('apply-btn')
            applyBtn.removeAttribute('disabled')
        }
        else if (arr.length > 4) {
            alert("AR kina jabe na")
            return
        }


        let ticketCount = getIntegerValue('ticket-count');
        setText('ticket-count', ticketCount + 1);



        let seatLeft = getIntegerValue('seat-left-count')
        setText('seat-left-count', seatLeft - 1)


        let totalPrice = getIntegerValue('total-price')
        setText('total-price', totalPrice + 550)
        setText('grand-price', totalPrice + 550)


        // Set Color and text color
        seat.style.backgroundColor = "rgb(29, 209, 0)",
        seat.style.color = "white"

        let phoneNumber = document.getElementById('phone-number')
        let next = document.getElementById('final-btn')

        phoneNumber.addEventListener('input', (e) => {
            if (phoneNumber.value.trim() !== '') {
                next.disabled = false;
            } else {
                next.disabled = true;
            }
        })

    })
}



let applyBtn = document.getElementById('apply-btn')

applyBtn.addEventListener('click', function (e) {

    let coupon = document.getElementById('coupon-input-field')

    let discount = document.getElementById('discounted-price')

    let totalPrice = getIntegerValue('total-price')

    let p1 = document.createElement('p')
    p1.innerText = 'Discounted Price'
    discount.appendChild(p1)

    let p2 = document.createElement('p')


    if (coupon.value === 'NEW15' || coupon.value === 'Couple20') {

        if (coupon.value === 'NEW15') {
            discountedPrice = totalPrice * 0.15

            p2.innerText = discountedPrice

            discount.appendChild(p2)
            setText('grand-price', totalPrice - discountedPrice) 


        }
        else {

            discountedPrice = totalPrice * 0.2

            p2.innerText = discountedPrice

            discount.appendChild(p2)
            setText('grand-price', totalPrice - discountedPrice) 

        }
        document.getElementById('coupon-field').classList.add('hidden')

    }
    else {
        alert("wrong coupon")
    }

})


