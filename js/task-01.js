const numberOfCategories = document.querySelectorAll('.item');
console.log ('Number of categories:', numberOfCategories.length);

numberOfCategories.forEach(function (catigories) {
    console.log('Category:', catigories.firstElementChild.textContent)
    console.log('Elements:', catigories.lastElementChild.children.length)
});