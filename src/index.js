import style from './styles.css';

import home from './home.js'
import menu from './menu.js'
import order from './order.js'
import location from './location.js'


load()

function load() {
    let content = document.getElementById('content')
    const goHome = document.getElementsByClassName('title-container')
    const navBar = document.getElementsByClassName("nav-container")

    content.append(home())

    goHome[0].addEventListener('click', () => {
        content.innerHTML = ''
        content.append(home())
    })
    
    Array.from(navBar[0].children).forEach(element => {
        element.addEventListener('click', () => {
            content.innerHTML = ''
            if (element.classList.contains("1")){
                content.append(menu())
            } else if (element.classList.contains("2")) {
                content.append(order())
             } else {
                    content.append(location())
                
            }
        })
    })
}


