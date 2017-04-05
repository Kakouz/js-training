const taxValue = 1.08
const phonePrice = 99.99
const accessoryPrice = 10.00
var bankAmount = 0
var cellTotal = 0
var buyCheck = true

function addTax (price) {
  cellTotal = (price * taxValue)
  return cellTotal
}
function buyCell (price, acessory) {
  cellTotal = phonePrice + accessoryPrice
  return cellTotal
}
function canBuy (bankAmount) {
  if (bankAmount < phonePrice + accessoryPrice) {
    buyCheck === false
    return buyCheck
  } else if (bankAmount > phonePrice + accessoryPrice) {
    buyCheck === true
    return buyCheck
  }
}

bankAmount = prompt('How much in the bank? ')
bankAmount = Number(bankAmount)
canBuy(bankAmount)
if (bankAmount === true) {
  buyCell()
  addTax(cellTotal)
  cellTotal = cellTotal.toFixed(2)
  console.log('You bought 1 cellphone for $', cellTotal)
} else {
  cellTotal = 'NO CASH IN THE BANK'
  console.log(cellTotal)
}
