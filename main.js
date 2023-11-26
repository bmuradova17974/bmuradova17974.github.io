let navbar=document.querySelectorAll(".navbar");
const paragraphs=document.querySelectorAll("p");
var heading=document.querySelectorAll("h1, h4, h3");

navbar.forEach((item, index) => {
item.style.animation = `moveup 1s ease-in-out forwards ${index / 10}s`;

item.addEventListener("animationend", () => {
paragraphs.forEach((item, index) => {
    item.style.animation = `moveup 1s ease-in-out forwards ${index / 100}s`;

heading.forEach((item, index) => {
    item.style.animation = `moveup 1s ease-in-out forwards ${index / 100}s`;
})
})
})
})

function Click() {
    var postlink= document.getElementById("link");
    postlink.innerHTML="https://www.facebook.com/share/p/8T3a3BKCxx3oXSsh/?mibextid=WC7FNe"
}
