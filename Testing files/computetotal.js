function calculateTotal1(qty1){
    let qty = qty1
    let total1 = qty * 49.99
    return total1
    calculateTotal()
}

function calculateTotal2(qty2){
    let qty = qty2
    let total2 = qty * 99.99
    return total2
    calculateTotal()
}

function calculateTotal3(qty3){
    let qty = qty3
    let total3 = qty * 29.99
    return total3
    calculateTotal()
}

function calculateTotal(q1,q2,q3){

    let t1 = calculateTotal1(q1)
    let t2 = calculateTotal2(q2)
    let t3 = calculateTotal3(q3)

    let subtotal = t1 + t2 + t3
    let tax = subtotal * 0.06
    tax = tax.toFixed(2)

    let total = Number(subtotal) + Number(tax)

    total = total.toFixed(2)
    return parseFloat(total)
}


module.exports.calculateTotal = calculateTotal;