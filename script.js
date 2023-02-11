/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(value){
    if(value.marks>50) console.log(value)
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(value){
    if(value.marks>50) console.log(value)
  })
}

function addData() {
  //Write your code here, just console.log
  var obj={id:4,name:"susan",age:"20",marks:45}
  arr.push(obj)
  console.log(arr)
}

function removeFailedStudent() {
  //Write your code here, just console.log
  i=0
  while(i<arr.length){
    if(arr[i].marks<50) arr.splice(i,1)
    else i++;
  }
  console.log(arr)
}

function concatenateArray() {
  //Write your code here, just console.log
  var secarr=[
    { id: 5, name: "raju", age: "35", marks: 71 },
    { id: 6, name: "shyam", age: "36", marks: 58 },
    { id: 7, name: "baburov", age: "42", marks: 10 },
  ]
  arr=arr.concat(secarr)
  console.log(arr)
}
