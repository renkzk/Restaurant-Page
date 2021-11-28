import {renderHome} from "./home"
import {renderMenu} from "./menu"
import {renderAbout} from "./about"

let body = document.body
let contentContainer = document.querySelector('#content')

let header = document.createElement('header')
header.innerHTML = `
<h1 class="header-title">Mamma Mia!</h1>
<section class="header-tabs">
    <button id="homeBtn" class="header-tab">Home</button>
    <button id="menuBtn" class="header-tab">Menu</button>
    <button id="aboutBtn" class="header-tab">About</button>
</section>
`

//Makes sure that header is placed before the content element in HTML
body.insertBefore(header, contentContainer)

//Add functionality to header buttons
let homeBtn = document.querySelector('#homeBtn')
homeBtn.addEventListener('click', () => renderHome())

let menuBtn = document.querySelector('#menuBtn')
menuBtn.addEventListener('click', () => renderMenu())

let aboutBtn = document.querySelector('#aboutBtn')
aboutBtn.addEventListener('click', () => renderAbout())

//On page load renders the home.js HTML
renderHome()