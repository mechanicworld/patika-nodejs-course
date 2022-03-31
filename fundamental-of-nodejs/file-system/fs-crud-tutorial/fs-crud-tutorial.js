const fs = require('fs');


fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}','utf-8', (err)=> {
  if(err) console.log(err);
  console.log('File was created')
})

setTimeout(() => {
  fs.readFile('employees.json','utf-8', ((err,data)=>{
    if(err) console.log(err);
    console.log(data);
    console.log("File was read")
  }))
}, 3000);

setTimeout(() => {
  fs.appendFile('employees.json', '\n{"name": "Employee 2 Name", "salary": 2200}','utf-8', (err)=> {
    if(err) console.log(err);
    console.log("File was updated")
  })
}, 6000);

setTimeout(() => {
  fs.unlink('employees.json', (err)=> {
    if(err) console.log(err);
    console.log("File was deleted")
  })
}, 9000);

