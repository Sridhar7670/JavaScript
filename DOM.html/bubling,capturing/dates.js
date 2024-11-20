let date= new Date();
console.log(date);
month= date.getMonth()+1;
console.log(month);
date1= date.getDate();
year= date.getUTCFullYear();

console.log(`${date1}/${month}/${year}`);