document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    const button = document.querySelector('.send-message');
    button.textContent = 'Sending...';
    button.disabled = true;
    
    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            alert('Message sent successfully!');
            this.reset();
        } else {
            alert('Error: ' + result.message);
        }
    } catch (error) {
        alert('Failed to send message. Please try again.');
        console.error(error);
    } finally {
        button.textContent = 'Send Message';
        button.disabled = false;
    }
});