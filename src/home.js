const contentDiv = document.querySelector("#content");

const addContent = () => {
    const header = document.createElement("h1");
    header.textContent = "Kooky Cook's Cooks";

    const subText = document.createElement("h2");
    subText.textContent = "For all your Saiyan needs.";

    const flavourText = document.createElement("p");
    flavourText.textContent = "This is a wonderful restaurant full of different kinds of food. Everything a Saiyan needs.";

    const gokuImage = document.createElement("img");
    gokuImage.src = "https://gifdb.com/images/high/goku-and-gohan-eating-noodles-44xss069dt71aoct.gif";

    contentDiv.append(header, subText, flavourText, gokuImage);
}

export { addContent };