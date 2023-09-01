const contentDiv = document.querySelector("#content");

const AddContactInfo = () => {
    const header = document.createElement("h1");
    header.textContent = "Contact Kooky";
    contentDiv.append(header);

    const contactMethods = [
        { name: "Instant Transmission", FlavourText: "We'll be right there in an instant.", Number: "142-123", Image: "https://media.tenor.com/S7irk8ycZwkAAAAM/teleportation-goku.gif" },
        { name: "Flying Nimbus", FlavourText: "Someone pure of heart will come flying down from the sky.", Number: "003-003", Image: "https://media.tenor.com/V0kbuapUuewAAAAM/goku-kid.gif" },
        { name: "Time Machine", FlavourText: "We're already on the job before you contact us, and it's probably already done.", Number: "335-122", Image: "https://static.wikia.nocookie.net/powerlisting/images/8/8f/Trunks_Time_Machine_Dragon_Ball_Z.gif" }
    ];

    let contactContent = document.createElement("div");
    contactContent.id = "contact-content";

    for (let method of contactMethods) {
        let newContactCard = document.createElement("div");
        newContactCard.classList.add("contact-item");

        let methodName = method.name;
        let methodText = method.FlavourText;
        let methodNumber = method.Number;

        let nameP = document.createElement("p");
        nameP.classList.add("contact-title");
        nameP.textContent = methodName;

        let textP = document.createElement("p");
        textP.classList.add("contact-text");
        textP.textContent = methodText;

        let numP = document.createElement("p");
        numP.classList.add("contact-number");
        numP.textContent = methodNumber;

        let contactImg = document.createElement("img");
        contactImg.src = method.Image;
        contactImg.classList.add("contact-image");

        newContactCard.append(nameP, textP, numP, contactImg);
        contactContent.append(newContactCard);
    }

    header.style.opacity = 0;
    contactContent.style.opacity = 0;
    contentDiv.append(contactContent);
    setTimeout(() => {
        header.style.opacity = 1;
        contactContent.style.opacity = 1;
    }, 250);
}

export { AddContactInfo };