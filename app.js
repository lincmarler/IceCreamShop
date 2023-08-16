const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: .5,
    quantity: 0
}]

const vessels = [{
    name: 'Waffle Cone',
    quantity: 0,
    price: 3
},
{
    name: 'Waffle Bowl',
    quantity: 0,
    price: 4
},
{
    name: 'Dipped Cone',
    quantity: 0,
    price: 5
}]



let creamElem = document.getElementById('CreamCheckout')
let topElem = document.getElementById('TopCheckout')
let vesselElem = document.getElementById('VesselCheckout')
let totalElem = document.getElementById('total')


function drawCream() {
    let template = ''
    iceCream.forEach(cream => {
        if (cream.quantity > 0) {
            template += `  <div class="d-flex justify-content-between fs-3">
            <span>${cream.name} x ${cream.quantity}</span>
            <span>$${cream.price}</span>
            <span>$${cream.quantity * cream.price}
            </div>`
        }
        console.log(template)
    })
    creamElem.innerHTML = template
}

function drawTop() {
    let template = ''
    {
        toppings.forEach(top => {
            if (top.quantity > 0) {
                template += `  <div class="d-flex justify-content-between fs-3">
            <span>${top.name} x ${top.quantity}</span>
            <span>$${top.price}</span>
            <span>$${top.quantity * top.price}
            </div>`
            }
            console.log(template)
        })
        topElem.innerHTML = template
    }
}


function drawVessel() {
    let template = ''
    {
        vessels.forEach(vessel => {
            if (vessel.quantity > 0) {
                template += `  <div class="d-flex justify-content-between fs-3">
            <span>${vessel.name} x ${vessel.quantity}</span>
            <span>$${vessel.price}</span>
            <span>$${vessel.quantity * vessel.price}
            </div>`
            }
            console.log(template)
        })
        vesselElem.innerHTML = template
    }
}

function orderCream(creamName) {
    let foundCream = iceCream.find(cream => cream.name == creamName)
    foundCream.quantity++
    console.log('buying icecream', foundCream)
    drawCream()
    topTotal()
}

function orderTopping(toppingName) {
    let foundTop = toppings.find(top => top.name == toppingName)
    foundTop.quantity++
    console.log('buying toppings', foundTop)
    drawTop()
    topTotal()
}

function orderVessel(vesselName) {
    let foundVessel = vessels.find(vessel => vessel.name == vesselName)
    foundVessel.quantity++
    console.log('buying vessels', foundVessel)
    drawVessel()
    topTotal()
}

function topTotal() {
    let total = 0
    toppings.forEach(toppings => {
        if (toppings.quantity > 0) {
            total += toppings.quantity * toppings.price
        }
    })
    vessels.forEach(vessels => {
        if (vessels.quantity > 0) {
            total += vessels.quantity * vessels.price
        }
    })
    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            total += iceCream.quantity * iceCream.price
        }
    })
    console.log('total', total)
    totalElem.innerText = total.toString()
}


function checkout() {
    if (window.confirm('Are you ready to check out?')) {
        iceCream.forEach(cream => cream.quantity = 0)
        console.log('checking out', iceCream)
        toppings.forEach(top => top.quantity = 0)
        vessels.forEach(vessel => vessel.quantity = 0)
        topTotal()
        drawVessel()
        drawTop()
        drawCream()
    }
}