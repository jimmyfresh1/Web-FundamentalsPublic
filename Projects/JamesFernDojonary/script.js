function logOutLogIn(element){
    if (element.innerText==='Login'){
        element.innerText = "Logout";
}
    else if (element.innerText=== "Logout"){
        element.innerText = "Login"
    }
}

function smashThatLike (element) {
    alert("Please smash that like button!");
    console.log(element.innerText)
    var count=parseInt(element.innerText)
    element.innerText = count + 1;
    
}

function hide(element) {
    element.remove()
}