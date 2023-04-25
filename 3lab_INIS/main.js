console.log(shirts);

const main = document.querySelector('main');

const productCardsContainer = document.createElement('div');
main.appendChild(productCardsContainer);
productCardsContainer.classList.add("product-cards-container");

for (let i = 0; i < shirts.length; i++) {
	
	const shirt = shirts[i];

	const productCard = document.createElement('div');
    productCardsContainer.appendChild(productCard);
	productCard.classList.add("product-card");
		
	const shirtImage = document.createElement('img');
	shirtImage.src = shirt.colors?.white?.front;
	if (shirt.colors == undefined) {
		shirt.colors = "";
	}
	productCard.appendChild(shirtImage);
	shirtImage.classList.add("shirt-img");
		
	const shirtName = document.createElement('h3');
	if (shirt.name == undefined) {
		shirt.name = "Name is not defined";
	}
	shirtName.textContent = shirt.name;
	productCard.appendChild(shirtName);
	shirtName.classList.add("shirt-name");
		
	const availableColorsCounter = Object.keys(shirt.colors).length;
	const shirtColorsInfo = document.createElement('span');
	if (shirt.colors == "") {
		shirtColorsInfo.textContent = "Colors are not defined";
	} else if (availableColorsCounter == 1) {
		shirtColorsInfo.textContent = "Available in 1 color";
	} else {
		shirtColorsInfo.textContent = `Available in ${availableColorsCounter} colors`;
	}
	productCard.appendChild(shirtColorsInfo);
	shirtColorsInfo.classList.add("shirt-colors-info");
	
	const quickViewButton = document.createElement('button');
	quickViewButton.textContent = "Quick View";
	productCard.appendChild(quickViewButton);
	quickViewButton.classList.add("quick-view-btn");

	const seePageLink = document.createElement("a");
	seePageLink.href = `details.html?id=${i}`;
	productCard.appendChild(seePageLink);
	seePageLink.classList.add("see-page-link");

	const seePageButton = document.createElement('button');
	seePageButton.textContent = "See Page";
	seePageLink.appendChild(seePageButton);
	seePageButton.classList.add("see-page-btn");
}