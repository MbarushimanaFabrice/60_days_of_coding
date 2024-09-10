// return even numbers
const arrays=[1,2,3,4,5,6,7,8,9]
for(i=0;arrays.length>=i;i++) {
   if(i%2==0){
    console.log(i);
   }
}
// sum

 let sum = 0;
for (let i = 0; i < arrays.length; i++) {
  sum += arrays[i];
}
console.log(`Sum of array is ${sum}`);

// Trucking time
const dates=new Date();
let hour= dates.getHours();
let min= dates.getMinutes();
let sec=dates.getSeconds();

if(hour>12){
    console.log(`Good afternon time is ${hour}: ${min} : ${sec}`);
}else{
    console.log("Good morning");
}
// Function get json placeholder

const myApp=async()=>{
    let API=await fetch("https://jsonplaceholder.typicode.com/posts")
    const datas=await API.json();
    console.log(datas);
} 
myApp() 