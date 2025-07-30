const image = document.querySelector("#image");
    const texte1 = document.querySelector("#texte1");
    const texte2 = document.querySelector("#texte2");

    const images = [
    "./asset/image/image1.png",
    "./asset/image/image2.webp",
    "./asset/image/image3.webp"
];

const descriptions = [
    {
        p1 : "Comme souvent, cette histoire commence dans une auberge...",
        p2 : "Celle-ci est miteuse, inquiétante, perdue au fin fond du marais sans retour."
    },
    {
        p1 : "La crypte se cachait au fond de la cave et d'inquiètant murmures s'en échappaient",
        p2 : "Prêts à en découdre, les aventuriers fourbirent leurs armes et grimoires."
    },
    {
        p1 : "La créature surgie des enfers se dressait devant les héros, dernier obstacle devant le trésor du nécromancien",
        p2 : "Le combat allait être sans merci!"
    }
]

let i = 0;

function Next() {
    console.log("Tout va bien")



    i++;

    if (i >= images.length) {
        i = 0;
    }


    image.src = images[i];
    texte1.textContent = descriptions[i].p1;
    texte2.textContent = descriptions[i].p2;
}