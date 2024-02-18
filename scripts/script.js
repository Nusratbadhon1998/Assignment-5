
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
let seats = document.getElementsByClassName('seat');

let arr = [];
for (const seat of seats) {
    seat.addEventListener('click', function (e) {
        seat.setAttribute("disabled", true);
        let seatName = seat.innerText;
        arr.push(seatName);

        if (arr.length === 4) {
            let applyBtn = document.getElementById('apply-btn');
            applyBtn.removeAttribute('disabled');
        } else if (arr.length > 4) {
            alert("You cannot select more than 4 seats");
            return;
        }

        // Displaying Seat name price and class
        displayResult(seatName);

        let ticketCount = getIntegerValue('ticket-count');
        setText('ticket-count', ticketCount + 1);

        let seatLeft = getIntegerValue('seat-left-count');
        setText('seat-left-count', seatLeft - 1);

        let totalPrice = getIntegerValue('total-price');
        setText('total-price', totalPrice + 550);
        setText('grand-price', totalPrice + 550);

        // Set Color and text color
        seat.style.backgroundColor = "rgb(29, 209, 0)";
        seat.style.color = "white";

        let phoneNumber = document.getElementById('phone-number');
        let next = document.getElementById('final-btn');

        phoneNumber.addEventListener('input', (e) => {
            if (phoneNumber.value.trim() !== '') {
                next.disabled = false;
            } else {
                next.disabled = true;
            }
        });
    });
}


// Call the function to initialize seat selection


let applyBtn = document.getElementById('apply-btn')

applyBtn.addEventListener('click', function (e) {

    let coupon = document.getElementById('coupon-input-field')
    if (coupon.value === 'NEW15' || coupon.value === 'Couple 20') {

        if (coupon.value === 'NEW15') {
            calculateDiscount(.15)
        }
        else {

            calculateDiscount(.2)
        }

        document.getElementById('coupon-field').classList.add('hidden')

    }

    else {
        alert("Wrong coupon")
    }

})




// document.getElementById('continue-btn').addEventListener('click', (e) => {
//     for (const seat of seats) {

//         seat.style.backgroundColor = '#F7F8F8'
//         seat.style.color = 'black'
//         setText('ticket-count', 0);
//         setText('seat-left-count', 40);
//         setText('total-price', 0)
//         setText('grand-price', 0)


//         let phoneNumber = document.getElementById('phone-number')
//         let passengerName = document.getElementById('passenger-name')
//         let email = document.getElementById('email')

//         phoneNumber.value = ''
//         passengerName.value = ''
//         email.value = ''




//     }


// })
