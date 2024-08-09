import homeImg from './assets/nanobar.png'

function home(){
     const template =document.createElement("template");
     template.innerHTML = `
        <p class="desc">The Nano Bistro offers a warm taste of
             tranquility in the heart of Nexus. Find solice in our
              food and drinks here or at home.</p>

        <img class="home-img" src="${homeImg}" alt="">
`
return template.content
}

export default home
