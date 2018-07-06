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

var $catalogView = document.querySelector("[data-view='catalog']")
var $detailsView = document.querySelector("[data-view='details']")
var $cartView = document.querySelector("[data-view='cart']")
var $checkoutView = document.querySelector("[data-view='checkout']")
var $pageTitle = document.getElementById('title')
var $cartBadge = document.getElementById('cart-badge')

function createItem(item) {

  var $item = document.createElement('div')
  var $img = document.createElement('img')
  var $cardBody = document.createElement('div')
  var $title = document.createElement('div')
  var $subTitle = document.createElement('div')
  var $description = document.createElement('div')
  var $price = document.createElement('div')

  $item.setAttribute('class', 'card')
  $item.setAttribute('style', 'width: 18rem;')
  $item.setAttribute('data-item-id', item.itemId)
  $img.setAttribute('class', 'card-img-top')
  $cardBody.setAttribute('class', 'card-body')
  $title.setAttribute('class', 'card-title')
  $subTitle.setAttribute('class', 'card-subtitle mb-2 text-muted')
  $price.setAttribute('id', 'catalog-price')

  $title.textContent = item.name
  $subTitle.textContent = item.brand
  $description.textContent = item.description
  $img.src = item.imageUrl
  $price.textContent = '$' + parseFloat(item.price).toFixed(2)

  $cardBody.appendChild($title)
  $cardBody.appendChild($subTitle)
  $cardBody.appendChild($description)
  $cardBody.appendChild($price)
  $item.appendChild($img)
  $item.appendChild($cardBody)

  return $item
}

function buildCatalog(itemList) {
  var $fullcatalog = document.createElement('div')
  $fullcatalog.setAttribute('id', 'catalog-element')
  for (var i = 0; i < itemList.length; i++) {
    var singleItem = createItem(itemList[i])
    $fullcatalog.appendChild(singleItem)
  }
  return $fullcatalog
}

function showView(app) {
  selectView(app.view)
  if (app.view === 'catalog') {
    $catalogView.appendChild(buildCatalog(app.catalog.items))
    $pageTitle.textContent = 'Jamazon'
  }
  else if (app.view === 'details') {
    $detailsView.appendChild(createDetails(app.details.item))

    var btnAddCart = document.getElementById('btn-add-cart')
    btnAddCart.onclick = function () {
      app.cart.items.push(app.details.item)
      $cartBadge.textContent = '(' + (app.cart.items.length) + ')'
    }

    var btnBack = document.getElementById('btn-back')
    btnBack.onclick = function () {
      app.view = 'catalog'
      $detailsView.removeChild(document.getElementById('details'))
      selectView(app.view)
    }
  }
  else if (app.view === 'cart') {
    if ($cartView.contains(document.getElementById('cart-container'))) {
      $cartView.removeChild(document.getElementById('cart-container'))
      $cartView.appendChild(buildCart(app.cart))
    }
    else {
      $cartView.appendChild(buildCart(app.cart))
    }
  }
  else {
    $checkoutView.appendChild(createCheckoutView(app.cart))
  }
}

showView(app)

function createDetails(item) {

  var $itemDetails = document.createElement('div')
  var $row = document.createElement('div')
  var $firstCol = document.createElement('div')
  var $img = document.createElement('img')
  var $secondCol = document.createElement('div')
  var $itemTitle = document.createElement('h5')
  var $itemSubTitle = document.createElement('h6')
  var $description = document.createElement('p')
  var $price = document.createElement('p')
  var $addToCart = document.createElement('a')
  var $checkout = document.createElement('a')

  $itemDetails.setAttribute('class', 'container')
  $itemDetails.setAttribute('id', 'details')
  $row.setAttribute('class', 'row')
  $firstCol.setAttribute('class', 'colDetails col col-lg-4')
  $img.setAttribute('class', 'card-img-top')
  $img.setAttribute('src', 'src=.../1--px180/')
  $secondCol.setAttribute('class', 'secondCol col')
  $itemTitle.setAttribute('class', 'titleFontSize card-title')
  $itemSubTitle.setAttribute('class', 'card-subtitle mb-2 text-muted')
  $itemSubTitle.setAttribute('class', 'subTitle')
  $description.setAttribute('class', 'card-text')
  $price.setAttribute('class', 'card-text')
  $price.setAttribute('id', 'price')
  $addToCart.setAttribute('href', '#')
  $addToCart.setAttribute('class', 'btn btn-outline-primary btn-sm')
  $addToCart.setAttribute('id', 'btn-add-cart')
  $checkout.setAttribute('class', 'btn btn-outline-primary btn-sm')
  $checkout.setAttribute('id', 'btn-back')

  $img.src = item.imageUrl
  $itemTitle.textContent = item.name
  $itemSubTitle.textContent = item.brand
  $description.textContent = item.description
  $price.textContent = '$' + parseFloat(item.price).toFixed(2)
  $addToCart.textContent = 'Add to cart'
  $checkout.textContent = 'Back'

  $itemDetails.appendChild($row)
  $row.appendChild($firstCol)
  $firstCol.appendChild($img)
  $row.appendChild($secondCol)
  $secondCol.appendChild($itemTitle)
  $secondCol.appendChild($itemSubTitle)
  $secondCol.appendChild($description)
  $secondCol.appendChild($price)
  $secondCol.appendChild($addToCart)
  $secondCol.appendChild($checkout)

  return $itemDetails

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

$catalogView.addEventListener('click', function () {
  var itemClicked = event.target.closest('.card')
  app.view = 'details'
  selectView(app.view)
  var itemId = parseInt(itemClicked.getAttribute('data-item-id'))
  app.details.item = match(itemId, app.catalog)
  showView(app)
})

function selectView(viewName) {
  var views = [$catalogView, $detailsView, $cartView, $checkoutView]
  views.forEach(view => {
    if (view.getAttribute('data-view') !== viewName) {
      view.setAttribute('class', 'hidden')
    }
    else view.removeAttribute('class', 'hidden')
  })
}

function createCartItem(item) {

  var $cartView = document.createElement('div')
  var $row = document.createElement('div')
  var $firstCol = document.createElement('div')
  var $image = document.createElement('img')
  var $secondCol = document.createElement('div')
  var $itemTitle = document.createElement('h5')
  var $subTitle = document.createElement('h6')
  var $description = document.createElement('p')
  var $price = document.createElement('p')

  $cartView.setAttribute('class', 'container')
  $cartView.setAttribute('id', 'details')
  $row.setAttribute('class', 'row')
  $firstCol.setAttribute('class', 'colCart col col-lg-4')
  $image.setAttribute('class', 'card-img-top')
  $secondCol.setAttribute('class', 'secondCol col')
  $itemTitle.setAttribute('class', 'cart-font-size card-title')
  $subTitle.setAttribute('class', 'sub-title card-subtitle mb-2 text-muted')
  $description.setAttribute('class', 'card-text')
  $price.setAttribute('class', 'card-text')
  $price.setAttribute('id', 'price')

  $image.src = item.imageUrl
  $itemTitle.textContent = item.name
  $subTitle.textContent = item.brand
  $price.textContent = '$' + parseFloat(item.price).toFixed(2)

  $cartView.appendChild($row)
  $row.appendChild($firstCol)
  $firstCol.appendChild($image)
  $row.appendChild($secondCol)
  $secondCol.appendChild($itemTitle)
  $secondCol.appendChild($subTitle)
  $secondCol.appendChild($description)
  $secondCol.appendChild($price)

  return $cartView

}

function buildCart(cart) {
  var $cartItems = document.createElement('div')
  $cartItems.setAttribute('id', 'cart-container')
  var cartTotal = 0
  for (var i = 0; i < cart.items.length; i++) {
    var cartItem = createCartItem(cart.items[i])
    $cartItems.appendChild(cartItem)
    cartTotal += cart.items[i].price
  }

  $pageTitle.textContent = 'Cart'

  var $itemCount = document.createElement('div')
  $itemCount.setAttribute('class', 'cart')
  $itemCount.textContent = app.cart.items.length + ' Item(s)'

  var $cartTotal = document.createElement('div')
  $cartTotal.setAttribute('class', 'cart')
  $cartTotal.textContent = 'Total: $' + parseFloat(cartTotal).toFixed(2)

  var $btnSection = document.createElement('div')
  var $continueShopBtn = document.createElement('button')
  $continueShopBtn.setAttribute('class', 'btn btn-outline-primary btn-sm')
  var $checkoutBtn = document.createElement('button')
  $checkoutBtn.setAttribute('class', 'btn-checkout btn btn-outline-primary btn-sm')

  $btnSection.appendChild($continueShopBtn)
  $btnSection.appendChild($checkoutBtn)
  $btnSection.setAttribute('class', 'buttonShop')
  $continueShopBtn.textContent = 'Continue Shopping'
  $checkoutBtn.textContent = 'Checkout'

  var $itemDetails = document.getElementById('details')
  var $catalog = document.getElementById('catalog-element')
  var $shoppingCart = document.getElementById('cart-container')

  $continueShopBtn.onclick = function () {
    app.view = 'catalog'
    selectView(app.view)
    if ($detailsView.contains($itemDetails)) $detailsView.removeChild($itemDetails)
    if ($catalogView.contains($catalog)) $catalogView.removeChild($catalog)
    if ($cartView.contains($shoppingCart)) $cartView.removeChild($shoppingCart)
    showView(app)
  }

  $checkoutBtn.onclick = function () {
    app.view = 'checkout'
    createCheckoutView(app.cart)
    selectView(app.view)
    if ($detailsView.contains($itemDetails)) $detailsView.removeChild($itemDetails)
    if ($catalogView.contains($catalog)) $catalogView.removeChild($catalog)
    if ($cartView.contains($shoppingCart)) $cartView.removeChild($shoppingCart)
    showView(app)
  }

  $cartItems.appendChild($itemCount)
  $cartItems.appendChild($cartTotal)
  $cartItems.appendChild($btnSection)

  return $cartItems
}

$cartBadge.onclick = function () {
  app.view = 'cart'
  selectView(app.view)
  showView(app)
}

function createCheckoutView(cart) {

  var $checkoutView = document.createElement('div')
  var $form = document.createElement('form')

  var $custNameSection = document.createElement('div')
  var $custNameLabel = document.createElement('label')
  var $custNameInput = document.createElement('input')

  var $addressSection = document.createElement('div')
  var $addressLabel = document.createElement('label')
  var $addressInput = document.createElement('input')

  var $creditCardSection = document.createElement('div')
  var $creditCardLabel = document.createElement('label')
  var $creditCardInput = document.createElement('input')
  var $creditCardName = document.createElement('small')

  var $payBtnSection = document.createElement('div')
  var $payBtn = document.createElement('button')

  $custNameSection.setAttribute('class', 'form-group col-md-6')
  $custNameLabel.setAttribute('for', 'name')
  $custNameInput.setAttribute('type', 'text')
  $custNameInput.setAttribute('class', 'form-control')
  $custNameInput.setAttribute('id', 'input-name')
  $custNameInput.setAttribute('placeholder', 'Enter name')
  $custNameLabel.textContent = 'Name'

  $addressSection.setAttribute('class', 'form-group col-md-6')
  $addressLabel.setAttribute('for', 'address')
  $addressInput.setAttribute('type', 'text')
  $addressInput.setAttribute('class', 'form-control')
  $addressInput.setAttribute('id', 'input-address')
  $addressInput.setAttribute('placeholder', 'Enter address')
  $addressLabel.textContent = 'Address'

  $creditCardSection.setAttribute('class', 'form-group col-md-6')
  $creditCardLabel.setAttribute('for', 'credit card')
  $creditCardInput.setAttribute('type', 'text')
  $creditCardInput.setAttribute('class', 'form-control')
  $creditCardInput.setAttribute('id', 'input-cc')
  $creditCardInput.setAttribute('placeholder', 'Enter credit card number')
  $creditCardLabel.textContent = 'Credit Card Number'

  $payBtn.setAttribute('type', 'submit')
  $payBtn.setAttribute('class', 'btn btn-primary')
  $payBtn.setAttribute('id', 'btn-pay')
  $payBtn.textContent = 'Pay'
  $payBtnSection.appendChild($payBtn)
  $payBtnSection.setAttribute('class', 'btn-pay')

  $payBtn.onclick = function () {
    alert('Your order has been received!')
  }

  $form.appendChild($custNameSection)
  $form.appendChild($custNameLabel)
  $form.appendChild($custNameInput)
  $form.appendChild($addressSection)
  $form.appendChild($addressLabel)
  $form.appendChild($addressInput)
  $form.appendChild($creditCardSection)
  $form.appendChild($creditCardLabel)
  $form.appendChild($creditCardInput)
  $form.appendChild($creditCardName)
  $form.appendChild($payBtnSection)

  var cartTotal = 0
  for (var i = 0; i < cart.items.length; i++) {
    cartTotal += cart.items[i].price
  }

  var $itemCount = document.createElement('div')
  $itemCount.setAttribute('class', 'cart-pay')
  $itemCount.textContent = app.cart.items.length + ' Item(s)'

  var $cartTotal = document.createElement('div')
  $cartTotal.setAttribute('class', 'cart-pay')
  $cartTotal.textContent = 'Total: $' + cartTotal

  $pageTitle.textContent = 'Checkout'
  $checkoutView.appendChild($form)
  $checkoutView.appendChild($itemCount)
  $checkoutView.appendChild($cartTotal)

  return $checkoutView
}
