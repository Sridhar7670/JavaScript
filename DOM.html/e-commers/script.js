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
    { name: "Apple", description: "Crisp and are juicy red apples", price: 5.2 }
    
];
groceryStore.forEach((item)=>{
    
    let parent= document.querySelector(".parent")

    let pro= document.createElement("div");
    pro.className="product";
    pro.id="products";
    let title= document.createElement("b");
    title.innerText=item.name;
   
    pro.append(title);
    
    console.log(pro);
    
    

    let description=document.createElement("span");
    
    description.innerText=item.description;
    pro.append(description)
    // console.log( description.innerText)

    let price= document.createElement("span");
    price.innerText=item.price;
    pro.append(price);
    
    // console.log( price.innerText);
    
    
    parent.append(pro);
    
    
})

