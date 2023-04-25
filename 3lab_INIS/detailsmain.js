console.log(shirts);

let params = new URLSearchParams(window.location.search);
let id = params.get('id');

let shirt = shirts[id];
   
let shirtColor = "white";   // default
let shirtSide = "front";    // default

let main = document.querySelector('main');

let productCard = document.createElement('div');
main.appendChild(productCard);
productCard.classList.add("product-card");

let shirtName = document.createElement('h1');
if (shirt.name == undefined) {
    shirt.name = "Name is not defined";
}
shirtName.textContent = shirt.name;
productCard.appendChild(shirtName);
shirtName.classList.add("shirt-name");

let shirtDetailsContainer = document.createElement('div');
productCard.appendChild(shirtDetailsContainer);
shirtDetailsContainer.classList.add("shirt-details-container");

let shirtImage = document.createElement('img');
shirtImage.src = shirt.colors[shirtColor][shirtSide];  // default
shirtDetailsContainer.appendChild(shirtImage);
shirtImage.classList.add("shirt-img");

let shirtInfoContainer = document.createElement('div');
shirtDetailsContainer.appendChild(shirtInfoContainer);
shirtInfoContainer.classList.add("shirt-info-container");

let shirtPrice = document.createElement('h1');
if (shirt.price == undefined) {
    shirt.price = "Price is not defined";
}
shirtPrice.textContent = shirt.price;
shirtInfoContainer.appendChild(shirtPrice);
shirtPrice.classList.add("shirt-price");

let shirtDescription = document.createElement('h5');
if (shirt.description == undefined) {
    shirt.description = "Description is not defined";
}
shirtDescription.textContent = shirt.description;
shirtInfoContainer.appendChild(shirtDescription);
shirtDescription.classList.add("shirt-description");

let sideButtonsContainer = document.createElement('div');
shirtInfoContainer.appendChild(sideButtonsContainer);
sideButtonsContainer.classList.add("side-btns-container");

let sideText = document.createElement('span');
sideText.textContent = "Side:";
sideButtonsContainer.appendChild(sideText);
sideText.classList.add("side-text");

let frontSideButton = document.createElement('button');
frontSideButton.textContent = "Front";
sideButtonsContainer.appendChild(frontSideButton);
frontSideButton.classList.add("side-btn");

frontSideButton.addEventListener('click', () => {
    shirtSide = "front";
    shirtImage.src = shirt.colors[shirtColor][shirtSide];
});

let backSideButton = document.createElement('button');
backSideButton.textContent = "Back";
sideButtonsContainer.appendChild(backSideButton);
backSideButton.classList.add("side-btn");

backSideButton.addEventListener('click', () => {
    shirtSide = "back";
    shirtImage.src = shirt.colors[shirtColor][shirtSide];
});

let colorButtonsContainer = document.createElement('div');
shirtInfoContainer.appendChild(colorButtonsContainer);
colorButtonsContainer.classList.add("color-btns-container");

let colorText = document.createElement('span');
colorText.textContent = "Color:";
colorButtonsContainer.appendChild(colorText);
colorText.classList.add("color-text");

let shirtColors = Object.keys(shirt.colors);

for (let i = 0; i < shirtColors.length; i++) {
    let currentColor = shirtColors[i];
    let colorButton = document.createElement('button');
    colorButton.textContent = currentColor;
    colorButton.style.backgroundColor = currentColor;
    colorButtonsContainer.appendChild(colorButton);
    colorButton.classList.add("color-btn");
    
    colorButton.addEventListener('click', (event) => {
        shirtColor = currentColor;
        shirtImage.src = shirt.colors[shirtColor][shirtSide];
    });
}
