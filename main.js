/* eslint-disable no-unused-vars */
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
var $h1 = document.querySelector('h1')
var cartBadge = document.querySelector('span')

function card(item) {

  var $card = document.createElement('div')
  var $img = document.createElement('img')
  var $cardBody = document.createElement('div')
  var $cardTitle = document.createElement('h5')
  var $cardSubTitle = document.createElement('h6')
  var $cardText = document.createElement('p')
  var $link = document.createElement('a')

  $card.setAttribute('class', 'card')
  $card.setAttribute('style', 'width: 18rem;')
  $card.setAttribute('data-item-id', item['itemId'])
  $img.setAttribute('class', 'card-img-top')
  $img.setAttribute('src', 'src=.../1--px180/')
  $img.setAttribute('alt', 'Card image cap')
  $cardBody.setAttribute('class', 'card-body')
  $cardTitle.setAttribute('class', 'card-title')
  $cardSubTitle.setAttribute('class', 'card-subtitle mb-2 text-muted')
  $cardText.setAttribute('class', 'card-text')
  $link.setAttribute('href', '#')
  $link.setAttribute('class', 'btn btn-outline-primary btn-sm')

  $cardTitle.textContent = item['name']
  $cardSubTitle.textContent = item['brand']
  $img.src = item['imageUrl']
  $cardText.textContent = item['price']
  $link.textContent = 'Add to cart'

  $card.appendChild($img)
  $card.appendChild($cardTitle)
  $card.appendChild($cardSubTitle)
  $card.appendChild($cardBody)
  $card.appendChild($cardText)
  $card.appendChild($link)

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
  else {
    renderCart.appendChild(buildCart(app.cart))
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
  firstCol.setAttribute('class', 'colCart col col-lg-4')
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
  desc.textContent = item['details']
  price.textContent = item['price']
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
    renderCatalog.removeAttribute('class', 'hidden')
  }
  else if (viewName === renderDetails.getAttribute('data-view')) {
    renderCatalog.setAttribute('class', 'hidden')
    renderCart.setAttribute('class', 'hidden')
    renderDetails.removeAttribute('class', 'hidden')
  }
  else {
    renderDetails.setAttribute('class', 'hidden')
    renderCatalog.setAttribute('class', 'hidden')
    renderCart.removeAttribute('class', 'hidden')
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
  img.setAttribute('src', 'src=.../1--px180/')
  secondCol.setAttribute('class', 'secondCol col')
  title.setAttribute('class', 'titleFontSize card-title')
  subTitle.setAttribute('class', 'card-subtitle mb-2 text-muted')
  subTitle.setAttribute('class', 'subTitle')
  desc.setAttribute('class', 'card-text')
  price.setAttribute('class', 'card-text')
  price.setAttribute('id', 'price')

  img.src = item['imageUrl']
  title.textContent = item['name']
  subTitle.textContent = item['brand']
  desc.textContent = item['details']
  price.textContent = item['price']

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
  cartItemsCount.textContent = app.cart.items.length + ' Items'

  var cartTotalEl = document.createElement('div')
  cartTotalEl.setAttribute('class', 'cart')
  cartTotalEl.textContent = 'Total: $' + cartTotal

  var buttonDiv = document.createElement('div')
  var buttonShop = document.createElement('button')
  buttonDiv.appendChild(buttonShop)
  buttonDiv.setAttribute('class', 'buttonShop')
  buttonShop.textContent = 'Continue Shopping'

  buttonShop.onclick = function (event) {
    app.view = 'catalog'
    view(app.view)
    var $details = document.getElementById('details')
    renderDetails.removeChild($details)
    var catOld = document.getElementById('catElement')
    renderCatalog.removeChild(catOld)
    var $cartContainer = document.getElementById('cartContainer')
    renderCart.removeChild($cartContainer)
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
