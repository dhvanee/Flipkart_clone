document.addEventListener("DOMContentLoaded", function () {

    let index = 0;
    const slides = document.querySelectorAll(".carousel-images img");
    const totalSlides = slides.length;

    function nextSlide() {
        index = (index + 1) % totalSlides;
        document.querySelector(".carousel-images").style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(nextSlide, 3000);

    async function fetchProducts() {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const productList = document.getElementById("product-list");

        data.forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>${product.description.slice(0, 100)}...</p>
                <p class="price">$${product.price}</p>
            `;
            productList.appendChild(productDiv);
        });
    }

    fetchProducts();

 
    const loginBtn = document.getElementById("login-btn");
    const loginOptions = document.querySelector(".login-options");

    loginBtn.addEventListener("click", function () {
        loginOptions.classList.toggle("show");
    });
});