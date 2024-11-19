document.addEventListener('DOMContentLoaded', () => {
    // Registration form validation
    const regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            if (!username || !email || !password) {
                alert('All fields are required.');
            } else if (password.length < 6) {
                alert('Password must be at least 6 characters.');
            } else {
                alert('Registration successful!');
            }
        });
    }

    // Login form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value.trim();
            if (!username || !password) {
                alert('Both fields are required.');
            } else {
                alert('Login successful!');
            }
        });
    }

    // Cart interactions
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            alert(button.dataset.item + ' added to cart!');
        });
    });

    console.log('JavaScript loaded and ready!');
});
