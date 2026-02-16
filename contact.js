 const API_URL = 'https://tech-haven-backend.onrender.com';

//const API_URL = 'http://127.0.0.1:3000'
const usernameInput = document.getElementById("username-contact");
const emailInput = document.getElementById("email-contact");
const phoneInput = document.getElementById("phone-contact");
const courseSelect = document.getElementById("course-contact");
const messageInput = document.getElementById("issue-contact");
const sendBtn = document.getElementById("sendBtn");
const displayMessage= document.getElementById("message-display")
async function sendMessage(e){
    e.preventDefault()
    const name = usernameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();
    const course = courseSelect.value;
    const message = messageInput.value;

    if (!name || !phone || !email || !course || !message) {
        alert('Please fill in all fields!');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }
    
        if (phone.length < 10) {
        alert('Please enter a valid phone number!');
        return;
    }
    sendBtn.disabled = true
    try {
        
        const response = await fetch(`${API_URL}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                phone,
                email,
                course,
                message
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            
            displayMessage.textContent= 'Thank you for your inquiry, We will contact you soon.';
            
            
            usernameInput.value = '';
            phoneInput.value = '';
            emailInput.value = '';
            courseSelect.selectedIndex = 0;
            messageInput.value = '';
            
            // Redirect to home page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 10000);
        } else {
            
            displayMessage.textContent= `Error: ${data.error || 'Failed to send message. Please try again.'}`;
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Connection error! Please try again.');
    } finally {
        
        sendBtn.disabled = false;
        sendBtn.textContent = 'SEND';
    }
}



sendBtn.addEventListener("click", sendMessage)


