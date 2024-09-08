document.addEventListener('DOMContentLoaded',()=>{
const suggestions = [
    {name:"Himalya",URL:"https://cdn01.pharmeasy.in/dam/products_otc/K97621/himalaya-purifying-neem-face-wash-400-ml-2-1674204139.jpg?dim=1440x0"},
    'Ibuprofen',
    'Paracetamol',
    'Antibiotic ointment',
    'Vitamin C',
    'Cold syrup',
    'Cough drops',
    'Antiseptic wipes'
];

function performSearch() {
    const query = document.getElementById('search-input').value;
    alert('Searching for: ' + query);
    // Implement search logic here
}

function showSuggestions() {
    const input = document.getElementById('search-input');
    const suggestionsList = document.getElementById('suggestions');
    const query = input.value.toLowerCase();

    suggestionsList.innerHTML = '';

    if (query.length > 0) {
        const filteredSuggestions = suggestions.filter(item => item.toLowerCase().includes(query));
        filteredSuggestions.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            li.onclick = () => {
                input.value = item;
                suggestionsList.innerHTML = '';
            };
            suggestionsList.appendChild(li);
        });
    }
}
});


// Add event listener for input to show suggestions with debouncing
let debounceTimer;
document.getElementById('searchBar').addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(showSuggestions, 300); // Adjust delay as needed
});

// Add event listener for search button or form submission
document.getElementById('searchBar').addEventListener('keypress',(e)=>{
    if(e.Key==='Enter'){
        performSearch();
    }
});
//over search bar
//cart button
document.addEventListener('DOMContentLoaded', function() {
    let cartCount = 0;

    // Function to update the cart badge
    function updateCartBadge(count) {
        document.getElementById('cart-badge').textContent = count;
    }

    // Example of adding items to the cart
    document.getElementById('cart-icon').addEventListener('click', function() {
        cartCount++;
        updateCartBadge(cartCount);
    });
});
//complete cart
// Function to simulate sending OTP
function sendOTP() {
    const phoneNumber = document.getElementById('phone-number').value;

    if (phoneNumber === '' || !/^\d{10}$/.test(phoneNumber)) {
        document.getElementById('message').innerText = 'Please enter a valid 10-digit phone number.';
        return;
    }

    // Simulate sending OTP (in a real application, you'd call an API here)
    document.getElementById('message').innerText = 'OTP sent to ' + phoneNumber;

    // Show the OTP input section
    document.getElementById('phone-input-section').style.display = 'none';
    document.getElementById('otp-input-section').style.display = 'block';
}

//slideshow code
let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Show the slides
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");

    if (n > slides.length - 1) {
        slideIndex = 0; // Wrap around
    } else if (n < 0) {
        slideIndex = slides.length - 1; // Wrap around
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Automatic slideshow
function autoSlides() {
    showSlides(slideIndex += 1);
    setTimeout(autoSlides, 3000); // Change image every 3 seconds
}

autoSlides();
// categories
// Select all category images
// Select all category images
const categoryImages = document.querySelectorAll('.category-image');

// Add click event listeners to each image
categoryImages.forEach(image => {
    image.addEventListener('click', () => {
        // Get the product name from the data attribute
        const productName = image.getAttribute('data-product');
        // Display an alert message
        alert(`You clicked ${productName}`);
    });
});
// Initialize cart count and total amount
let cartCount = 0;
let totalAmount = 0;

// Select cart count and amount display elements
const cartCountElement = document.querySelector('.cart-count');
const cartAmountElement = document.querySelector('.cart-amount');

// Select all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Add click event listeners to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get product price from data attribute
        const price = parseFloat(button.getAttribute('data-price'));

        // Update cart count and total amount
        cartCount++;
        totalAmount += price;

        // Update the cart display
        cartCountElement.textContent = cartCount;
        cartAmountElement.textContent = `$${totalAmount.toFixed(2)}`;
    });
});



//add to cart function
//footer section
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;

    if (validateEmail(email)) {
        alert('Thank you for subscribing to our newsletter!');
        // You can replace the alert with actual form submission logic here
        document.getElementById('newsletter-form').reset();
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
