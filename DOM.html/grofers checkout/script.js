const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    let sum = 0;
    let totalPrice = document.querySelector(".totalprice");
    let prices = document.querySelectorAll(".prices");
    prices.forEach((userItem) => {
        let num = parseInt(userItem.textContent);
        sum += num;
    });
    totalPrice.innerText = sum;

    // Select the last td with class 'item' and add bold text
    let lastItem = document.querySelector("td.item:last-child");
    lastItem.innerHTML = "<b>Total Price</b>";
};

getSumBtn.addEventListener("click", getSum);