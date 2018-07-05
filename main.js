var app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://goo.gl/Q7X6VB'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400.00,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599.00,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399.00,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: {
    items: []
  }
}

var renderCatalog = document.querySelector("[data-view='catalog']")
var renderDetails = document.querySelector("[data-view='details']")
var renderCart = document.querySelector("[data-view='cart']")
var renderCheckout = document.querySelector("[data-view='checkout']")
var $h1 = document.querySelector('h1')
var cartBadge = document.querySelector('span')

function card(item) {

  var $card = document.createElement('div')
  var $img = document.createElement('img')
  var $cardBody = document.createElement('div')
  var titleDiv = document.createElement('div')
  var subTitleDiv = document.createElement('div')
  var descDiv = document.createElement('div')
  var priceDiv = document.createElement('div')

  $card.setAttribute('class', 'card')
  $card.setAttribute('style', 'width: 18rem;')
  $card.setAttribute('data-item-id', item['itemId'])
  $img.setAttribute('class', 'card-img-top')
  $cardBody.setAttribute('class', 'card-body')
  titleDiv.setAttribute('class', 'card-title')
  titleDiv.setAttribute('id', 'titleDiv')
  subTitleDiv.setAttribute('class', 'card-subtitle mb-2 text-muted')
  priceDiv.setAttribute('id', 'priceCat')

  titleDiv.textContent = item['name']
  subTitleDiv.textContent = item['brand']
  descDiv.textContent = item['description']
  $img.src = item['imageUrl']
  priceDiv.textContent = '$' + parseFloat(item['price']).toFixed(2)

  $cardBody.appendChild(titleDiv)
  $cardBody.appendChild(subTitleDiv)
  $cardBody.appendChild(descDiv)
  $cardBody.appendChild(priceDiv)
  $card.appendChild($img)
  $card.appendChild($cardBody)

  return $card
}

function buildCatalog(itemList) {
  var $divItems = document.createElement('div')
  $divItems.setAttribute('id', 'catElement')
  for (var i = 0; i < itemList.length; i++) {
    var itemCard = card(itemList[i])
    $divItems.appendChild(itemCard)
  }
  return $divItems
}

function renderApp(app) {
  view(app.view)
  if (app.view === 'catalog') {
    var finalBuild = buildCatalog(app.catalog['items'])
    renderCatalog.appendChild(finalBuild)
    $h1.textContent = 'Jamazon'
  }
  else if (app.view === 'details') {
    var detailsView = details(app.details.item)
    renderDetails.appendChild(detailsView)

    var btn = document.getElementById('button')
    btn.onclick = function (event) {
      app.cart.items.push(app.details.item)
      cartBadge.textContent = '(' + (app.cart.items.length) + ')'
    }

    var btnBack = document.getElementById('buttonBack')
    btnBack.onclick = function (event) {
      app.view = 'catalog'
      var $details = document.getElementById('details')
      renderDetails.removeChild($details)
      view(app.view)
    }
  }
  else if (app.view === 'cart') {
    var $cartContainer = document.getElementById('cartContainer')
    if (renderCart.contains($cartContainer)) {
      renderCart.removeChild($cartContainer)
      renderCart.appendChild(buildCart(app.cart))
    }
    else {
      renderCart.appendChild(buildCart(app.cart))
    }
  }
  else {
    renderCheckout.appendChild(checkout(app.cart))
  }
}

renderApp(app)

function details(item) {

  var container = document.createElement('div')
  var row = document.createElement('div')
  var firstCol = document.createElement('div')
  var img = document.createElement('img')
  var secondCol = document.createElement('div')
  var title = document.createElement('h5')
  var subTitle = document.createElement('h6')
  var desc = document.createElement('p')
  var price = document.createElement('p')
  var link = document.createElement('a')
  var linkBack = document.createElement('a')

  container.setAttribute('class', 'container')
  container.setAttribute('id', 'details')
  row.setAttribute('class', 'row')
  firstCol.setAttribute('class', 'colDetails col col-lg-4')
  img.setAttribute('class', 'card-img-top')
  img.setAttribute('src', 'src=.../1--px180/')
  secondCol.setAttribute('class', 'secondCol col')
  title.setAttribute('class', 'titleFontSize card-title')
  subTitle.setAttribute('class', 'card-subtitle mb-2 text-muted')
  subTitle.setAttribute('class', 'subTitle')
  desc.setAttribute('class', 'card-text')
  price.setAttribute('class', 'card-text')
  price.setAttribute('id', 'price')
  link.setAttribute('href', '#')
  link.setAttribute('class', 'btn btn-outline-primary btn-sm')
  link.setAttribute('id', 'button')
  linkBack.setAttribute('class', 'btn btn-outline-primary btn-sm')
  linkBack.setAttribute('id', 'buttonBack')

  img.src = item['imageUrl']
  title.textContent = item['name']
  subTitle.textContent = item['brand']
  desc.textContent = item['description']
  price.textContent = '$' + parseFloat(item['price']).toFixed(2)
  link.textContent = 'Add to cart'
  linkBack.textContent = 'Back'

  container.appendChild(row)
  row.appendChild(firstCol)
  firstCol.appendChild(img)
  row.appendChild(secondCol)
  secondCol.appendChild(title)
  secondCol.appendChild(subTitle)
  secondCol.appendChild(desc)
  secondCol.appendChild(price)
  secondCol.appendChild(link)
  secondCol.appendChild(linkBack)

  return container

}

function match(id, catalog) {
  var match = null
  for (var i = 0; i < catalog.items.length; i++) {
    if (id === catalog.items[i].itemId) {
      match = catalog.items[i]
    }
  }
  return match
}

renderCatalog.addEventListener('click', function (event) {
  var elt = event.target.closest('.card')
  app.view = 'details'
  view(app.view)
  var itemId = parseInt(elt.getAttribute('data-item-id'))
  app.details.item = match(itemId, app.catalog)
  renderApp(app)
})

function view(viewName) {
  if (viewName === renderCatalog.getAttribute('data-view')) {
    renderDetails.setAttribute('class', 'hidden')
    renderCart.setAttribute('class', 'hidden')
    renderCheckout.setAttribute('class', 'hidden')
    renderCatalog.removeAttribute('class', 'hidden')
  }
  else if (viewName === renderDetails.getAttribute('data-view')) {
    renderCatalog.setAttribute('class', 'hidden')
    renderCart.setAttribute('class', 'hidden')
    renderCheckout.setAttribute('class', 'hidden')
    renderDetails.removeAttribute('class', 'hidden')
  }
  else if (viewName === renderCart.getAttribute('data-view')) {
    renderDetails.setAttribute('class', 'hidden')
    renderCatalog.setAttribute('class', 'hidden')
    renderCheckout.setAttribute('class', 'hidden')
    renderCart.removeAttribute('class', 'hidden')
  }
  else {
    renderDetails.setAttribute('class', 'hidden')
    renderCatalog.setAttribute('class', 'hidden')
    renderCart.setAttribute('class', 'hidden')
    renderCheckout.removeAttribute('class', 'hidden')
  }
}

function cartView(item) {

  var container = document.createElement('div')
  var row = document.createElement('div')
  var firstCol = document.createElement('div')
  var img = document.createElement('img')
  var secondCol = document.createElement('div')
  var title = document.createElement('h5')
  var subTitle = document.createElement('h6')
  var desc = document.createElement('p')
  var price = document.createElement('p')

  container.setAttribute('class', 'container')
  container.setAttribute('id', 'details')
  row.setAttribute('class', 'row')
  firstCol.setAttribute('class', 'colCart col col-lg-4')
  img.setAttribute('class', 'card-img-top')
  secondCol.setAttribute('class', 'secondCol col')
  title.setAttribute('class', 'titleFontSizeCart card-title')
  subTitle.setAttribute('class', 'subTitle card-subtitle mb-2 text-muted')
  desc.setAttribute('class', 'card-text')
  price.setAttribute('class', 'card-text')
  price.setAttribute('id', 'price')

  img.src = item['imageUrl']
  title.textContent = item['name']
  subTitle.textContent = item['brand']
  price.textContent = '$' + parseFloat(item['price']).toFixed(2)

  container.appendChild(row)
  row.appendChild(firstCol)
  firstCol.appendChild(img)
  row.appendChild(secondCol)
  secondCol.appendChild(title)
  secondCol.appendChild(subTitle)
  secondCol.appendChild(desc)
  secondCol.appendChild(price)

  return container

}

function buildCart(cart) {
  var $cartItems = document.createElement('div')
  $cartItems.setAttribute('id', 'cartContainer')
  var cartTotal = 0
  for (var i = 0; i < cart.items.length; i++) {
    var cartItem = cartView(cart.items[i])
    $cartItems.appendChild(cartItem)
    cartTotal += cart.items[i].price
  }

  $h1.textContent = 'Cart'

  var cartItemsCount = document.createElement('div')
  cartItemsCount.setAttribute('class', 'cart')
  cartItemsCount.textContent = app.cart.items.length + ' Item(s)'

  var cartTotalEl = document.createElement('div')
  cartTotalEl.setAttribute('class', 'cart')
  cartTotalEl.textContent = 'Total: $' + parseFloat(cartTotal).toFixed(2)

  var buttonDiv = document.createElement('div')
  var buttonShop = document.createElement('button')
  buttonShop.setAttribute('class', 'btn btn-outline-primary btn-sm')
  var buttonCheckout = document.createElement('button')
  buttonCheckout.setAttribute('class', 'buttonCheckout btn btn-outline-primary btn-sm')

  buttonDiv.appendChild(buttonShop)
  buttonDiv.appendChild(buttonCheckout)
  buttonDiv.setAttribute('class', 'buttonShop')
  buttonShop.textContent = 'Continue Shopping'
  buttonCheckout.textContent = 'Checkout'

  var $details = document.getElementById('details')
  var catOld = document.getElementById('catElement')
  var $cartContainer = document.getElementById('cartContainer')

  buttonShop.onclick = function (event) {
    app.view = 'catalog'
    view(app.view)
    if (renderDetails.contains($details)) renderDetails.removeChild($details)
    if (renderCatalog.contains(catOld)) renderCatalog.removeChild(catOld)
    if (renderCart.contains($cartContainer)) renderCart.removeChild($cartContainer)
    renderApp(app)
  }

  buttonCheckout.onclick = function (event) {
    app.view = 'checkout'
    checkout(app.cart)
    view(app.view)
    if (renderDetails.contains($details)) renderDetails.removeChild($details)
    if (renderCatalog.contains(catOld)) renderCatalog.removeChild(catOld)
    if (renderCart.contains($cartContainer)) renderCart.removeChild($cartContainer)
    renderApp(app)
  }

  $cartItems.appendChild(cartItemsCount)
  $cartItems.appendChild(cartTotalEl)
  $cartItems.appendChild(buttonDiv)

  return $cartItems
}

cartBadge.onclick = function (event) {
  app.view = 'cart'
  view(app.view)
  renderApp(app)
}

function checkout(cart) {

  var checkout = document.createElement('div')
  var form = document.createElement('form')

  var name = document.createElement('div')
  var nameLabel = document.createElement('label')
  var nameInput = document.createElement('input')
  var nameSmall = document.createElement('small')

  var address = document.createElement('div')
  var addressLabel = document.createElement('label')
  var addressInput = document.createElement('input')
  var addressSmall = document.createElement('small')

  var cc = document.createElement('div')
  var ccLabel = document.createElement('label')
  var ccInput = document.createElement('input')
  var ccName = document.createElement('small')

  var buttonPayDiv = document.createElement('div')
  var buttonPay = document.createElement('button')

  name.setAttribute('class', 'form-group col-md-6')
  nameLabel.setAttribute('for', 'name')
  nameInput.setAttribute('type', 'text')
  nameInput.setAttribute('class', 'form-control')
  nameInput.setAttribute('id', 'inputName')
  nameInput.setAttribute('placeholder', 'Enter name')
  nameLabel.textContent = 'Name'

  address.setAttribute('class', 'form-group col-md-6')
  addressLabel.setAttribute('for', 'address')
  addressInput.setAttribute('type', 'text')
  addressInput.setAttribute('class', 'form-control')
  addressInput.setAttribute('id', 'inputAddress')
  addressInput.setAttribute('placeholder', 'Enter address')
  addressLabel.textContent = 'Address'

  cc.setAttribute('class', 'form-group col-md-6')
  ccLabel.setAttribute('for', 'credit card')
  ccInput.setAttribute('type', 'text')
  ccInput.setAttribute('class', 'form-control')
  ccInput.setAttribute('id', 'inputCC')
  ccInput.setAttribute('placeholder', 'Enter credit card number')
  ccLabel.textContent = 'Credit Card Number'

  buttonPay.setAttribute('type', 'submit')
  buttonPay.setAttribute('class', 'btn btn-primary')
  buttonPay.setAttribute('id', '$buttonPay')
  buttonPay.textContent = 'Pay'
  buttonPayDiv.appendChild(buttonPay)
  buttonPayDiv.setAttribute('class', 'buttonPay')

  buttonPay.onclick = function (event) {
    alert('Your order has been received!')
  }

  form.appendChild(name)
  form.appendChild(nameLabel)
  form.appendChild(nameInput)
  form.appendChild(nameSmall)
  form.appendChild(address)
  form.appendChild(addressLabel)
  form.appendChild(addressInput)
  form.appendChild(addressSmall)
  form.appendChild(cc)
  form.appendChild(ccLabel)
  form.appendChild(ccInput)
  form.appendChild(ccName)
  form.appendChild(buttonPayDiv)

  var $cartItems = document.createElement('div')
  $cartItems.setAttribute('id', 'cartContainer')
  var cartTotal = 0

  for (var i = 0; i < cart.items.length; i++) {
    cartTotal += cart.items[i].price
  }

  var cartItemsCount = document.createElement('div')
  cartItemsCount.setAttribute('class', 'cartPay')
  cartItemsCount.textContent = app.cart.items.length + ' Item(s)'

  var cartTotalEl = document.createElement('div')
  cartTotalEl.setAttribute('class', 'cartPay')
  cartTotalEl.textContent = 'Total: $' + cartTotal

  $h1.textContent = 'Checkout'
  checkout.appendChild(form)
  checkout.appendChild(cartItemsCount)
  checkout.appendChild(cartTotalEl)

  return checkout
}
