// const promise1 = new Promise((resolve, reject) => {

//   resolve("Got DATA");
//   reject("Connection error");
// });

// const promise2 = new Promise((resolve, reject) => {

//   reject("Connection error");
// });
// // console.log(promise1);

// promise1
//   .then(resolve => console.log(resolve))
//   .catch(err => console.log(err))

// promise2
//   .then(resolve => console.log(resolve))
//   .catch(err => console.log(err))


// Callback to Promise

const books = [
  { name: 'Book 1', author: 'author 1' },
  { name: 'Book 2', author: 'author 2' },
  { name: 'Book 3', author: 'author 3' }
]

const listBooks = () => {
  books.map(book => {
    console.log(book.name);
  })
}


const addBook = (newBook) => {

  const promise3 = new Promise((resolve, reject) => {
    books.push(newBook);
    resolve(books);
    // reject('Connection Error')
  })

  return promise3;

}

addBook({ name: "Book Test", author: "author Test" })
  .then(() => {
    console.log('New List')
    listBooks();
  })
  .catch(err => {
    console.log(err)
  })

