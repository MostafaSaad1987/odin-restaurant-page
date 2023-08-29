const contentDiv = document.querySelector("#content");

const AddContent = () => {
    const header = document.createElement("h1");
    header.textContent = "Kooky Cook's Cooks";

    const subText = document.createElement("h2");
    subText.textContent = "For all your Saiyan needs.";

    const flavourText = document.createElement("p");
    flavourText.textContent = "This is a wonderful restaurant full of different kinds of food. Everything a Saiyan needs.";

    const gokuImage = document.createElement("img");
    gokuImage.classList.add("goku-eating");
    gokuImage.src = "https://gifdb.com/images/high/goku-and-gohan-eating-noodles-44xss069dt71aoct.gif";

    let homeContent = document.createElement("div");
    homeContent.id = "home-content";

    homeContent.append(header, subText, flavourText, gokuImage);

    contentDiv.append(homeContent);
}

export { AddContent };