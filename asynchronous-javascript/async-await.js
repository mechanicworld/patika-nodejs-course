function getData(data) {
  return new Promise((res, rej) => {
    console.log("Request is sending for getting data from server...")

    if (data) {
      res("Data was downloaded");
    } else {
      rej("Data is missing!!!");
    }
  })
}

function cleanData(receivedData) {
  return new Promise((res, rej) => {
    console.log("Request is sending for organizing data...");

    if (receivedData) {
      res("Data was organized");
    } else {
      rej("Organization of data was failed");
    }
  })
}

// ============ WITH PROMISE ===============
// getData(true)
//   .then(result => {
//     console.log(result);
//     return cleanData(true)
//   })
//   .then(result => console.log(result))
//   .catch(err => {
//     console.log(err);
//   })

// ============ WITH ASNYC-AWAIT ===============
// === Syntactic Sugar===
// async function processData() {

//   try {
//     const receivedData = await getData(false)
//     console.log(receivedData)


//     const cleanedData = await cleanData(true)
//     console.log(cleanedData)


//   } catch (error) {
//     console.log(error)
//   }


// }

// processData();

// ============ CONVERT TO ASNY-AWAIT ===================

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

// addBook({ name: "Book Test", author: "author Test" })
//   .then(() => {
//     console.log('New List')
//     listBooks();
//   })
//   .catch(err => {
//     console.log(err)
//   })

async function showBooks() {
  try {
    await addBook({ name: "Book Test", author: "author Test" })
    listBooks();
  } catch (error) {
    console.log(error)
  }
}

showBooks();