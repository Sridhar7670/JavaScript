// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let obj={
    name:"sridhar",
    age:20,
    gender:"male",
    height:5.7,
    weight:72,
    f1: function fun(){
        console.log("hello"+this.name)
    },
    cw: function(){console.log(this.age+" is to small")}
}
//using this for obj context can aslo use ib global context 
obj.cw()
obj.f1()



//using some functions on objects
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))  //returns nested arrays


//iterating over objects
for(let key in obj){
    console.log(key)
    console.log(obj[key])
}


//to  find reveser of a string 
let str="helloolleh"
rev=""
for(i in str){
  rev= str[i]+rev
}
if(rev==str)console.log(true)
else console.log(false)




//with using rev just using basic while and if statments

let s="aabcab"
let i=0;j=s.lenght-1;

while(i<j){
    if(s[i]!=s[j]){
        console.log("not a pal")
    }
    else{i++}
}
if(i>j){
    console.log("is a pal")
}
