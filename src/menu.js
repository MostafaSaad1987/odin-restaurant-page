const contentDiv = document.querySelector("#content");

const foodAvailable = [
    { name: 'Puddings', link: 'https://static.wikia.nocookie.net/dragonball/images/a/ae/Puddings.png/revision/latest?cb=20201120020120' },
    { name: 'Paradise herb', link: 'https://static.wikia.nocookie.net/dragonball/images/d/d8/Paradise_herb.jpg/revision/latest?cb=20180826194338' },
    { name: 'Ramen', link: 'https://static.wikia.nocookie.net/dragonball/images/7/77/RamenDBS.png/revision/latest?cb=20201120020507' },
    { name: 'Fruit of the Tree of Might', link: 'https://static.wikia.nocookie.net/dragonball/images/7/7a/Dbz_movie3_1193.jpg/revision/latest?cb=20180522175046' },
    { name: 'Eggs', link: 'https://static.wikia.nocookie.net/dragonball/images/c/ce/PteroEggs.png/revision/latest?cb=20111227002822' },
    { name: 'Fancy Chocolates', link: 'https://static.wikia.nocookie.net/dragonball/images/f/f4/Dbz237_-_by_%28dbzf.ten.lt%29_20120329-16570146.jpg/revision/latest?cb=20120331090659' }
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

        newFoodCard.append(newImg, newP);
        menuContent.append(newFoodCard);
    }
    contentDiv.append(menuContent);
}

export { AddMenuItems };