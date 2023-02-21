const numberOfCategories = document.querySelector('ul#categories')
console.log('Number of categories:', numberOfCategories.children.length);

const firstCategory = numberOfCategories.children[0].firstElementChild;
console.log('Category:', firstCategory.textContent);

const firstElements = firstCategory.nextElementSibling.children;
console.log('Elements:', firstElements.length);

const secondCategory = numberOfCategories.children[1].firstElementChild;
console.log('Category:', secondCategory.textContent);

const secondElements = secondCategory.nextElementSibling.children;
console.log('Elements:', secondElements.length);

const thirdCategory = numberOfCategories.children[2].firstElementChild;
console.log('Category:', thirdCategory.textContent);

const thirdElements = thirdCategory.nextElementSibling.children;
console.log('Elements:', thirdElements.length);


