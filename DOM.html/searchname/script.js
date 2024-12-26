const searchInput= document.querySelector("#search");

let students=[
    {name:"John",age:20,grade:90},
    {name:"jonny",age:21,grade:50},
    {name:"jane",age:19,grade:80},
    {name:"sridhar",age:25,grade:90}
]

function filterInput(searchQuery){

    const filteredInput = students.filter((student)=>{
        return student.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
      
    console.log(filteredInput);
    }

searchInput.addEventListener("input",()=>{
    let searchQuery=searchInput.value;
    filterInput(searchQuery);

})



