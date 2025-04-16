const categoryItems = document.querySelectorAll('.item');
console.log('Number of categories:', categoryItems.length);

categoryItems.forEach(function (item) {
  const title = item.querySelector('h2').textContent;
  const elementsCategory = item.querySelectorAll('ul li').length;

  console.log('Category:', title);
  console.log('Elements:', elementsCategory);
});
const categories = document.querySelectorAll('#categories .item');
const sheet = document.getElementById('categories');

categories.forEach(item => {
  const title = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('ul > li');

  const table = document.createElement('table');
  const caption = document.createElement('caption');
  caption.textContent = title;
  table.appendChild(caption);

  elements.forEach(el => {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = el.textContent;
    row.appendChild(cell);
    table.appendChild(row);
  });
});
