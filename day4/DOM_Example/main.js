// Single Element Selector
const row = document.getElementById("jacques-row")
// console.log(row)

// Multi element selector
const rows = document.getElementsByTagName('tr')
// console.log(rows);

const names = document.getElementsByClassName("name")
// console.log(names)

const namedRows = document.getElementsByName("row")
// console.log(namedRows);

// console.log(document.children[0].children[1].children[0].children)

// DOM Tree Traversal
// Each element has children
// document.children

// each element has a parent
// accesse by element.parentElement

// console.log(row.parentElement);

// Create/Eediting and Removing Elements

// console.log(row.innerHTML)

const tableBody = document.getElementById("table-body");
const newRow = document.createElement('tr');
const nameCell = document.createElement('td');
const surnameCell = document.createElement('td')

nameCell.innerHTML = 'Michelle';
surnameCell.innerHTML = 'Fisher';

newRow.append(nameCell);
newRow.append(surnameCell);

tableBody.append(newRow);

// Add Event Listeners to DOM Elements
const removeButton = document.getElementById("remove-button")

removeButton.addEventListener("click", (event) => {
  // this is how we remove elements from the dom
  // using the remove() function
  // event.target.parentElement.parentElement.remove();

  // this is how we manage event bubbling
  event.stopPropagation();

  console.log(event);

})

tableBody.addEventListener('click', (event) => {
  console.log(event);
})

// tableBody.addEventListener("mousemove", (event) => {
//   console.log(event);
// })

tableBody.classList.add('green');
if (tableBody.classList.contains('green'))
{
  tableBody.classList.remove('green');
}

tableBody.setAttribute('name', 'something different')
// console.log(tableBody.getAttribute('id'))



// local storage
const input = document.getElementById('text-input')

const savedText = localStorage.getItem('text');
if (savedText)
{
  input.value = savedText;
}

input.addEventListener("change", (event) => {
  // console.log(input.value);
  localStorage.setItem('text', input.value);
})