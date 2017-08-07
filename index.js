var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = item;
  var itemConstructor = new Object();
  itemConstructor[itemName] = Math.floor(Math.random()*50);
  cart.push(itemConstructor)
  console.log(`${itemName} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var text = 'In your cart, you have '
  if(cart.length === 0){
    return `Your shopping cart is empty.`}
  for(var i = 0; i<cart.length; i++ ){
    var obj = cart[i]
    var values = Object.keys(cart[i])
    if(i === cart.length-1) {
      text +=  'and ' + values + " at $" + obj[values] + '.'
    }else{
      text += values + " at $" + obj[values] + ', '
     } }return text
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
