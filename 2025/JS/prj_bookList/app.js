// Book Constructor  // PART ONE
class Book {
    constructor (title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Constructor
class UI extends Book {
    constructor(title, author, isbn) {
        super(title, author, isbn);
    }

//     addToBookList(book) {
        
//         const list = document.getElementById('book-list');
//         // Create element
//         const row = document.createElement('tr');
//         // Insert cols
//         row.innerHTML = `

//             <td>${book.title}</td>
//             <td>${book.author}</td>
//             <td>${book.isbn}</td>
//             <td><a href="#" class="delete">X</a></td>
        
//         `;
//         list.appendChild(row);   
//     }

//     // Clear fields
//     clearFields() {
//         document.getElementById('title').value = '';
//         document.getElementById('author').value = '';
//         document.getElementById('isbn').value = '';
//     }

//     // Show Alert
//     showAlert(message, className) {
//         // create div
//         const div = document.createElement('div');
//         // Add class name
//         div.className = `alert ${className}`;
//         // Add text
//         div.appendChild(document.createTextNode(message));
//         // Get parent
//         const container = document.querySelector('.container');
//         const form = document.querySelector('#book-form');
//         // Insert alert
//         container.insertBefore(div, form);
//         // Time out after 3 sec
//         setTimeout(function() {
//             document.querySelector('.alert').remove();
//         }, 1000);
//     }

//     // Delete Book
//     deleteBook(target) {
//         if(target.className === 'delete') {
//             target.parentElement.parentElement.remove();
//         }
//     }

// }


// // Event Listener for add Book
// document.getElementById('book-form').addEventListener('submit',function(e){
//     // Get form values
//     const title = document.getElementById('title').value,
//           author = document.getElementById('author').value,
//           isbn = document.getElementById('isbn').value;

//     // Instantiate Book
//     const book = new Book(title, author, isbn);
//     // Instatiate UI
//     const ui = new UI();

//     console.log(ui)

//     // validate
//     if(title === '' || author === '' || isbn === '') {
//         // Erro Alert
//         ui.showAlert('Please fill in all fields', 'error');
//     } else {
//         // Add book to list
//         ui.addToBookList(book);

//         // Show Success
//         ui.showAlert('Book Added!', 'success');

//         // Clear fields
//         ui.clearFields();
//     }

//     e.preventDefault();
// });

// //Event Listener for delete
// document.getElementById('book-list').addEventListener('click', function(e){

//     const ui = new UI();

//     ui.deleteBook(e.target);

//     // Show message
//     ui.showAlert('Book removed!', 'success');

//     e.preventDefault();
// })





// PART TWO

// Book Constructor --- 1A
// function Book(title, author, isbn) {
//     this.title = title; // --- 2A
//     this.author = author; /// --- 3A
//     this.isbn = isbn;   /// --- 4A
// }


// // UI Constructor  2A
// function UI() {}

// UI.prototype.addBookToList = function(book) {
//     const list = document.getElementById('book-list');
//     // Create tr element
//     const row = document.createElement('tr');
//     // Insert cols
//     row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href="#" class="delete">X</a></td>
//     `
//     list.appendChild(row);


//     // console.log(book);
// }

// UI.prototype.showAlert = function (message, className) {
//     // Create div
//     const div = document.createElement('div');
//     // Add Class Name
//     div.className = `alert ${className}`;
//     // Add Text
//     div.appendChild(document.createTextNode(message));
//     // Get parent
//     const container = document.querySelector('.container');
//     // Get form
//     const form = document.querySelector('#book-form');
//     // Insert alert
//     container.insertBefore(div, form);

//     // Timeout after 3 sec
//     setTimeout(function(){
//         document.querySelector('.alert').remove();
//     }, 3000)

// }

// // Delete Book
// UI.prototype.deleteBook = function(target) {
//     if(target.className === 'delete') {
//         target.parentElement.parentElement.remove();
//     }
// }

// // Clear Fields
// UI.prototype.clearFields = function() {
//     document.getElementById('title').value = '';
//     document.getElementById('author').value = '';
//     document.getElementById('isbn').value = '';
// }

// // Eventlistener for add book ---- 1 B
// document.getElementById('book-form').addEventListener('submit', function(e) {
//     // Get form values ---- 2B
//     const title = document.getElementById('title').value,
//           author = document.getElementById('author').value,
//           isbn = document.getElementById('isbn').value;

//         //   console.log(title,author, isbn);

//         // Instantiate a book ---- 3B
//         const book = new Book(title, author, isbn);

//         // Instantiate UI  ----- 4B
//         const ui = new UI();

//         // Validate -- 7B
//         if (title === '' || author === '' || isbn === '') {
//             ui.showAlert('Please fill in all fields', 'error');
//         } else {

//             // Add book  to list  
//             ui.addBookToList(book);

//             // Show success
//             ui.showAlert('Book Added!', 'success');
    
//             // Clear fields  
//             ui.clearFields();
//         }



//     e.preventDefault();
// });

// // Event Listener for delete
// document.getElementById('book-list').addEventListener('click', function(e) {

//     const ui = new UI();

//     ui.deleteBook(e.target);

//     // Show message
//     ui.showAlert('Book removed', 'success');

//     e.preventDefault();
// });






