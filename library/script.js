let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = crypto.randomUUID();
};

function addBooktoLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages))
};

const libraryContainer = document.getElementById('library-container');
function viewBooks() {
  libraryContainer.innerHTML = '';

  for (const book of myLibrary) {
    //console.log(myLibrary[i]);
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    const title = document.createElement('h2');
    title.textContent = book.title;
    const author = document.createElement('p');
    author.textContent = `by ${book.author}`;
    const pages = document.createElement('p');
    pages.textContent = `${book.pages} pages`;
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);

    libraryContainer.appendChild(bookCard);
  }
}

addBooktoLibrary('lord of the rings', 'tolkein', 295);
addBooktoLibrary('crime and punishment', 'dostoevsky', 600);
addBooktoLibrary('kafka on the shore', 'murakami', 459);
addBooktoLibrary('godfather', 'mario puzo', 398);

viewBooks();


const addButton = document.getElementById('add-book-btn');
const dialog = document.getElementById('new-book-dialog');

//const inputTitle = document.createElement('input');
//dialog.appendChild(inputTitle);
addButton.addEventListener("click", () => {
  dialog.showModal();
});

const form = document.getElementById("new-book-form");
form.addEventListener("submit", () => {
  event.preventDefault();
  newBooktitle = document.getElementById("TitleInput").value;
  newAuthor = document.getElementById("AuthorInput").value;
  newPages = document.getElementById("PagesInput").value;
  addBooktoLibrary(newBooktitle, newAuthor, newPages);
  viewBooks();
  dialog.close();
});
