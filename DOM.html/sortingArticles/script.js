const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean', 
    'The Bled', 
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'Anywhere But Here', 
    'An Old Dog'
];

bands.sort();
console.log(bands.sort());

let ul=document.createElement("ul");
ul.id="band";

bands.forEach((item)=>{
    let li= document.createElement("li");
    li.innerText=item;
    ul.append(li);
})
document.body.append(ul);