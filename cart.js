let priceOne = document.querySelector('.price1').textContent = 695
let quantity = document.querySelector('.quantity')
let total = document.querySelector('.total-price') 


let addBtn = document.querySelector('.add-cart')
let minusBtn = document.querySelector('.remove-cart')

let valueOfQuantity = 1




addBtn.addEventListener('click', () => {
    if (quantity.textContent < 50) {
        quantity.textContent = valueOfQuantity += 1
        total.textContent = `Total amount: $${priceOne * quantity.textContent}`
    }
})

minusBtn.addEventListener('click', () => {
    if (quantity.textContent > 1){
        quantity.textContent -= 1
        total.textContent = `Total amount: $${priceOne * quantity.textContent}`
    }
})

