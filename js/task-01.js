const itemsLinksEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsLinksEl.length}`);

itemsLinksEl.forEach(item => {
const title = item.querySelector('h2').textContent;
const itemsEl = item.querySelectorAll('li').length;
console.log(`Category: ${title}`);
console.log(`Elements: ${itemsEl}`);
});
