const liCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${liCategories.length}`);
console.log("\n");

for (let el of liCategories) {
    console.log(`Category: ${el.querySelector("h2").textContent}`);
    console.log(`Elements: ${el.querySelectorAll("li").length}`);
    console.log("\n");
}