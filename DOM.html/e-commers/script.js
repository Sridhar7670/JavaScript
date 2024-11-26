const groceryStore = [
    { name: "Apples", description: "Crisp and juicy red apples", price: 1.2 },
    { name: "Bananas", description: "Sweet and ripe bananas", price: 0.5 },
    { name: "Carrots", description: "Fresh organic carrots", price: 0.8 },
    { name: "Bread", description: "Whole grain bread loaf", price: 2.5 },
    { name: "Milk", description: "1 liter of whole milk", price: 1.5 },
    { name: "Eggs", description: "A dozen free-range eggs", price: 3.0 },
    { name: "Chicken Breast", description: "Boneless, skinless chicken breast", price: 5.5 },
    { name: "Broccoli", description: "Fresh green broccoli", price: 1.3 },
    { name: "Orange Juice", description: "1 liter of fresh orange juice", price: 3.2 },
    { name: "Cheddar Cheese", description: "Sharp cheddar cheese block", price: 4.0 },
    { name: "Tomatoes", description: "Ripe and juicy tomatoes", price: 1.8 },
    { name: "Spinach", description: "Fresh organic spinach", price: 2.0 },
    { name: "Yogurt", description: "Plain Greek yogurt", price: 1.1 },
    { name: "Olive Oil", description: "Extra virgin olive oil", price: 6.0 },
    { name: "Pasta", description: "Whole wheat pasta", price: 1.5 },
    { name: "Rice", description: "Long grain white rice", price: 2.2 },
    { name: "Bell Peppers", description: "Mixed colorful bell peppers", price: 2.0 },
    { name: "Ground Beef", description: "Lean ground beef", price: 7.0 },
    { name: "Salmon", description: "Fresh Atlantic salmon fillet", price: 10.0 },
    { name: "Peanut Butter", description: "Creamy peanut butter", price: 3.5 },
    { name: "Apple", description: "Crisp and juicy red apples", price: 5.2 }
];

let parent = document.querySelector(".parent");

parent.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        console.log(groceryStore[e.target.id]);   //will return the total card items like title desc & price
    }
});

function displayProducts(products) {
    parent.innerHTML = '';  // Clear previous products
    products.forEach((item, index) => {
        let pro = document.createElement("div");
        pro.className = "product";
        pro.id = "products";

        let title = document.createElement("b");
        title.innerText = item.name;

        let description = document.createElement("span");
        description.innerText = item.description;

        let price = document.createElement("span");
        price.innerText = `$${item.price.toFixed(2)}`;

        let button = document.createElement("button");
        button.innerText = "Add";
        button.id = index;

        pro.append(title, description, price, button);
        parent.append(pro);
    });
}

function filterProducts(searchTerm) {
    const filteredProducts= groceryStore.filter((item)=>{
        // console.log( item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        return item.name.toLowerCase().includes(searchTerm.toLowerCase())
       
    })
    displayProducts(filteredProducts);
}

document.querySelector("#search").addEventListener("input", (e) => {
    filterProducts(e.target.value);
    // console.log(e.target.value)
});

// Initial display of all products
displayProducts(groceryStore);
