import map from './assets/birstromap.png'

function location(){
     const template =document.createElement("template");
     template.innerHTML = `
     <p class="desc">From Nexus central take the 4south then
             switch to the 34northeast. In Region 1.46 walk along 
             lane 14 south and it is on the left</p>
        <img src="${map}" alt="" class="other-img">
`
return template.content
}

export default location
