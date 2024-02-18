

function getIntegerValue(id){

    return parseInt(document.getElementById(id).innerText)

}

function setText(id,value){

    document.getElementById(id).innerText= value


}

function displayResult(seatName){
    let display = document.getElementById('display-price')

    let li = document.createElement('li')

    
    
    let p1 = document.createElement('p')
    p1.innerText = seatName

    let p2 = document.createElement('p')
    p2.innerText = 'Economy'

    
    let p3 = document.createElement('p')
    p3.innerText = 550


    li.appendChild(p1)
    li.appendChild(p2)
    li.appendChild(p3)
    display.appendChild(li)

}



