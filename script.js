document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        if (name && email && message) {
            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';
            form.reset();
        } else {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        }
    });
});
