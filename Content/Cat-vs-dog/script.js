var animalImg = document.querySelector("#fav-animal");


function pickCat(element){
element.style.backgroundColor = "aqua";
animalImg.src="images/cat.jpg"
}

function pickDog(element) {
element.classList.add("btn-style");
animalImg.src ="images/dog.jpg"

}