function double(element){
    element.innerText *=2;
}

function over(element) {
    element.style.height = "40vh"
    element.style.width = "40vh"
}

function out(element) {
    element.style.height = "20vh"
    element.style.width = "20vh"
}

function justifyFlex(selectElement, flexBox) {
    flexBox.style.justifyContent =selectElement.value;
}

function alignFlex(selectElement, flexBox) {
    flexBox.style.alignItems =selectElement.value;
}

function toggleDarkMode() {
    var body = document.querySelector("body");
    body.classList.toggle('dark')
}