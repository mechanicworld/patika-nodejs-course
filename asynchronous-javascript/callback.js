let mission1 = "Mission 1 "
let mission2 = "Mission 2 "
let mission3 = "Mission 3 "
let mission4 = "Mission 4 "


// ======================SYNC =======================
// const func1 = () => {
//   console.log(mission1 + "is completed")
// }
// const func2 = () => {
//   console.log(mission2 + "is completed")
// }
// const func3 = () => {
//   console.log(mission3 + "is completed")
// }


// func1();
// func2();
// func3();

// ======================SYNC-NESTED =======================
// const func1 = () => {
//   console.log(mission1 + "is completed")
//   func2()
// }

// const func2 = () => {
//   console.log(mission2 + "is completed")
//   func3()
// }

// const func3 = () => {
//   console.log(mission3 + "is completed")
// }

// func1()

//================================
// !!!Javascript works  singlethread and SYNC

// Simulation of callback function of waiting another
// let x = 5;
// console.log("first",x);


// setTimeout(() => {
//   x += 5;
//   console.log("forth",x)
// },5000)

// console.log("second",x);

// x += 5;
// console.log("third",x);


const book = [
  {name:'Book 1', author:'author 1'},
  {name:'Book 2', author:'author 2'},
  {name:'Book 3', author:'author 3'}
]

const listBooks = () => {
  book.map(book => {
    console.log(book.name);
  })
}

listBooks();

const addBook = (newBook,callback) => {
  book.push(newBook);
  callback();
}

addBook({name:"Book Test", author:"author Test"}, listBooks)

