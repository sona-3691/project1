
  document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.style.display = 'none');
    
    // Form validation
    let isValid = true;

    // Full Name validation
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Full name is required.';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }

    // Password validation
    const password = document.getElementById('password').value;
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters long.';
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    } else if (!specialCharPattern.test(password)) {
        document.getElementById('password-error').textContent = 'Password must contain at least one special character.';
        document.getElementById('password-error').style.display = 'block';
        isValid = false;
    }

    // Confirm Password validation
    const confirmPassword = document.getElementById('confirm-password').value;
    if (confirmPassword !== password) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        document.getElementById('confirm-password-error').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Form is valid, proceed with form submission or further actions
        alert('Registration successful!');
        setTimeout(function() {
            window.location.href = 'pharm.html'; // Redirect to another page
        }, 1000); // 1 second delay
    }
});