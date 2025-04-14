const categoryItems = document.querySelectorAll('.item');
console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(function (item) {
  const title = item.querySelector('h2').textContent;
  const elementsCategory = item.querySelectorAll('ul li').length;

  console.log('Category:', title);
  console.log('Elements:', elementsCategory);
});
