const fs = require('fs');



// READ FILE
// fs.readFile('password.txt', 'utf-8', (err, data) => {
//   if(err) console.log(err);
//   console.log(data);
//   console.log('File is read')
// })

// WRITE FILE
// fs.writeFile('example.txt', 'Hello first write', (err) => {
//   if(err) console.log(err);
//   console.log('File writing is done!')
// })

// ADD DATA to FILE
fs.appendFile('example.txt', '\nNew Line is added', 'utf-8', (err)=>{
  if(err) console.log(err);
  console.log('New line is added')
})

// DELETE FILE

fs.unlink('example.json', (err) => {
  if(err) console.log(err)
  console.log('File is deleted')
})

// CREATE DIRECTORY
// For nested directory recurswive should be true
fs.mkdir('uploads/img',{recursive:true},(err)=> {
  if(err) console.log(err);
  console.log('DIRECTORY is created')
})

// DELETE DIRECTORY
fs.rmdir('uploads', {recursive:true},(err)=> {
  if(err) console.log(err)
  console.log('Directories were deleted')
})