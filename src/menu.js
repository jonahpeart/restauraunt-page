import drink from './assets/drink.png'
import noodle from './assets/noodle.png'
import quiche from './assets/quiche.png'
import soup from './assets/soup.png'
import stirfry from './assets/stirfry.png'

function menu(){
     const template =document.createElement("template");
     template.innerHTML = `

     <p class="desc"> Nano stir fry -------------></p>
     <img src="${stirfry}" alt="" class="menu-item right">

     <img src="${noodle}" alt="" class="menu-item">
     <p class="desc right"><------------ Noodle bowl</p>

     <p class="desc">Soup of the night ---------></p>
     <img src="${soup}" alt="" class="menu-item right">

     <img src="${quiche}" alt="" class="menu-item">
     <p class="desc right"><--------------- Quiche</p>

     <p class="desc">Espresso lemon soda -------></p>
     <img src="${drink}" alt="" class="menu-item right">

`
return template.content
}

export default menu
