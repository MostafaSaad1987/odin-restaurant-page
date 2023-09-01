const contentDiv = document.querySelector("#content");
import puddingImage from '../src/images/Food/puddings.png';
import paradiseHerbImage from '../src/images/Food/paradise-herb.png';
import ramenImage from '../src/images/Food/ramendbs.png';
import mightImage from '../src/images/Food/FOTTOM.png';
import eggsImage from '../src/images/Food/eggs.png';
import chocoImage from '../src/images/Food/choco.png';

const foodAvailable = [
    { name: 'Pudding', link: puddingImage, description: "Almost caused the universe to be destroyed from how good it is." },
    { name: 'Paradise herb', link: paradiseHerbImage, description: "Increase your life span by 1,000 years, but you'd have to live on an island alone with a talking turtle." },
    { name: 'Ramen', link: ramenImage, description: "Good ol' ramen. Most common food, but tasets especially good from Kooky Cook." },
    { name: 'Fruit of the Tree of Might', link: mightImage, description: "Fills you with energy that is extracted from an entire planet." },
    { name: 'Eggs', link: eggsImage, description: "Chicken eggs, Dragon eggs, Demon King eggs, Cell eggs, Magic eggs, you name it." },
    { name: 'Fancy Chocolates', link: chocoImage, description: "Totally not poisonous." }
];

const AddMenuItems = () => {
    const header = document.createElement("h1");
    header.textContent = "Kooky Cook's Specials";
    contentDiv.append(header);

    let menuContent = document.createElement("div");
    menuContent.id = "menu-content";

    for (let food of foodAvailable) {
        let newFoodCard = document.createElement("div");
        newFoodCard.classList.add("food-item");

        let foodName = food.name;
        let imgLink = food.link;

        let newP = document.createElement("p");
        newP.textContent = foodName;
        newP.classList.add("food-name");

        let newImg = document.createElement("img");
        newImg.classList.add("food-image");
        newImg.src = imgLink;

        let overlayElement = document.createElement("div");
        overlayElement.classList.add("overlay");

        let foodDescription = document.createElement("div");
        foodDescription.classList.add("food-description");
        foodDescription.textContent = food.description;

        overlayElement.append(foodDescription);
        newFoodCard.append(newImg, newP, overlayElement);
        menuContent.append(newFoodCard);
    }

    header.style.opacity = 0;
    menuContent.style.opacity = 0;
    contentDiv.append(menuContent);
    setTimeout(() => {
        header.style.opacity = 1;
        menuContent.style.opacity = 1;
    }, 250);
}

export { AddMenuItems };