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
  }
}

var $app = document.getElementById('app')
var $h1 = document.querySelector('h1')

function displayItem(itemNumber) {

  var $card = document.createElement('div')
  var $img = document.createElement('img')
  var $cardBody = document.createElement('div')
  var $cardTitle = document.createElement('h5')
  var $cardSubTitle = document.createElement('h6')
  var $cardText = document.createElement('p')
  var $link = document.createElement('a')

  $card.setAttribute('class', 'card')
  $card.setAttribute('style', 'width: 18rem;')
  $img.setAttribute('class', 'card-img-top')
  $img.setAttribute('src', 'src=.../1--px180/')
  $img.setAttribute('alt', 'Card image cap')
  $cardBody.setAttribute('class', 'card-body')
  $cardTitle.setAttribute('class', 'card-title')
  $cardSubTitle.setAttribute('class', 'card-subtitle mb-2 text-muted')
  $cardText.setAttribute('class', 'card-text')
  $link.setAttribute('href', '#')
  $link.setAttribute('class', 'btn btn-outline-primary btn-sm')

  $cardTitle.textContent = app.catalog.items[itemNumber].name
  $cardSubTitle.textContent = app.catalog.items[itemNumber].brand
  $img.src = app.catalog.items[itemNumber].imageUrl
  // $cardBody.textContent = app.catalog.items[itemNumber].brand
  $cardText.textContent = app.catalog.items[itemNumber].price
  $link.textContent = 'Add to cart'

  $card.appendChild($img)
  $card.appendChild($cardTitle)
  $card.appendChild($cardSubTitle)
  $card.appendChild($cardBody)
  $card.appendChild($cardText)
  $card.appendChild($link)

  return $card
}

function renderCatalog() {
  for (var i = 0; i < app.catalog.items.length; i++) {
    var item = displayItem(i)
    $app.appendChild(item)
  }

  $h1.textContent = 'Jamazon'
}

renderCatalog()
