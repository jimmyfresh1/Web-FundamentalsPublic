const pokeUrl = "https://pokeapi.co/api/v2/pokemon/""
const resultDiv = document.querySelector ("pokeResult")
const nameInput = document.querySelector ("#pokeName")

async function  getPoke(event){
    event.preventDefault()     
    resultDiv.innerHTML = "Loading. . . "
    console.log("Function ran, still here tho!")
    let response = await fetch(pokeUrl+nameInput.value);
    let data = await response.json();
    console.log(data)
    resultDiv.innerHTML= `
        <h3> PokeNumber: ${data.id} Name: ${data.name} </h3>   
        <img src = "${data.sprites.front_default}" alt ="${data.name}">
    `
}

function randPoke() {
    resultDiv.innerHTML = "Loading. . . "
    let rand=Math.floor(Math.random()*999)
        fetch (pokeURL +rand)
            .then( response => response.json())
            fetch(U)

            .catch ( err => console.log(err))
}