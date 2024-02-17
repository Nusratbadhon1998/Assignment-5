
// Banner Card Design Using JS for trying purpose
let bannerCardsContainer = document.getElementsByClassName('banner-card')

for (const card of bannerCardsContainer) {
    card.style.backgroundColor = "white",
        card.style.padding = "15px",
        card.style.borderRadius = "10px",
        card.style.marginRight = "15px",
        card.style.borderBottom = "5px solid rgb(29, 209, 0)"

}

let arr = [];
let flag = false

// get all seat
let seats = document.getElementsByClassName('seat')

for (const seat of seats) {


    seat.addEventListener('click', function (e) {



        seat.setAttribute("disabled", true)
        arr.push(seat.innerText)


        if (arr.length === 4) {
            let applyBtn = document.getElementById('apply-btn')
            applyBtn.removeAttribute('disabled')
        }
        else if (arr.length > 4) {
            alert("AR kina jabe na")
            return
        }

        // Seat left

        // parseint innertext

        let seatLeft = parseInt(document.getElementById('seat-left-count').innerText)
        document.getElementById('seat-left-count').innerText = seatLeft - 1

        // Show Price in display box
        let display = document.getElementById('display-price')



        let li = document.createElement('li')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let p3 = document.createElement('p')

        p1.innerText = seat.innerText
        p2.innerText = 'Economy'
        p3.innerText = 550
        li.appendChild(p1)
        li.appendChild(p2)
        li.appendChild(p3)
        display.appendChild(li)

        // Total
        // ParseINt innertext
        let totalPrice = parseInt(document.getElementById('total-price').innerText)
        document.getElementById('total-price').innerText = totalPrice + 550


        // shudhu inner text
        document.getElementById('grand-price').innerText = totalPrice + 550



        seat.style.backgroundColor = "rgb(29, 209, 0)",
        seat.style.color = "white"
        
    })

}

let phoneNumber = document.getElementById('phone-number')
let next = document.getElementById('final-btn')
console.log(next)


if (flag===false && phoneNumber.length > 0) {
    next.removeAttribute('disabled')

}

console.log(flag)


let applyBtn = document.getElementById('apply-btn')

applyBtn.addEventListener('click', function (e) {

    let coupon = document.getElementById('coupon-input-field')

    let discount = document.getElementById('discounted-price')

    let totalPrice = parseInt(document.getElementById('total-price').innerText)


    let p1 = document.createElement('p')
    p1.innerText = 'Discounted Price'
    discount.appendChild(p1)

    let p2 = document.createElement('p')


    if (coupon.value === 'NEW15' || coupon.value === 'Couple20') {

        if (coupon.value === 'NEW15') {
            discountedPrice = totalPrice * 0.15

            p2.innerText = discountedPrice

            discount.appendChild(p2)
            document.getElementById('grand-price').innerText = totalPrice - discountedPrice


        }
        else {

            discountedPrice = totalPrice * 0.2

            p2.innerText = discountedPrice

            discount.appendChild(p2)
            document.getElementById('grand-price').innerText = totalPrice - discountedPrice

        }
        document.getElementById('coupon-field').classList.add('hidden')

    }
    else {
        alert("wrong coupon")
    }




})


