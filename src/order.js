import takeout from './assets/takeout.png'

function order(){
     const template =document.createElement("template");
     template.innerHTML = `
   <p class="desc">Order online through the Nexus region 1.46 ordering portal or phone: 43BJ03_N37</p>
        <img src="${takeout}" alt="" class="other-img">
`
return template.content
}

export default order
