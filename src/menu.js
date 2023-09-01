const contentDiv = document.querySelector("#content");

const foodAvailable = [
    { name: 'Pudding', link: 'https://static.wikia.nocookie.net/dragonball/images/a/ae/Puddings.png/revision/latest?cb=20201120020120', description: "Almost caused the universe to be destroyed from how good it is." },
    { name: 'Paradise herb', link: 'https://static.wikia.nocookie.net/dragonball/images/d/d8/Paradise_herb.jpg/revision/latest?cb=20180826194338', description: "Increase your life span by 1,000 years, but you'd have to live on an island alone with a talking turtle." },
    { name: 'Ramen', link: 'https://static.wikia.nocookie.net/dragonball/images/7/77/RamenDBS.png/revision/latest?cb=20201120020507', description: "Good ol' ramen. Most common food, but tasets especially good from Kooky Cook." },
    { name: 'Fruit of the Tree of Might', link: 'https://static.wikia.nocookie.net/dragonball/images/7/7a/Dbz_movie3_1193.jpg/revision/latest?cb=20180522175046', description: "Fills you with energy that is extracted from an entire planet." },
    { name: 'Eggs', link: 'https://static.wikia.nocookie.net/dragonball/images/c/ce/PteroEggs.png/revision/latest?cb=20111227002822', description: "Chicken eggs, Dragon eggs, Demon King eggs, Cell eggs, Magic eggs, you name it." },
    { name: 'Fancy Chocolates', link: 'https://static.wikia.nocookie.net/dragonball/images/f/f4/Dbz237_-_by_%28dbzf.ten.lt%29_20120329-16570146.jpg/revision/latest?cb=20120331090659', description: "Totally not poisonous." }
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