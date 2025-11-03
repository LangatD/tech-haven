 const API_URL = 'https://tech-haven-backend.onrender.com';



document.addEventListener('DOMContentLoaded', function() {

const usernameInput = document.getElementById('username');
const numberInput = document.getElementById('number');
const emailInput = document.getElementById('email');
const courseSelect = document.getElementById('course');
const datetimeInput = document.getElementById('datetime');
//const bookButton = document.getElementById('book-btn');
const bookButton = document.querySelector('.freeless-maincont button');

async function bookTrialLesson(e) {
    e.preventDefault();
    
    
    const username = usernameInput.value.trim();
    const phone = numberInput.value.trim();
    const email = emailInput.value.trim();
    const course = courseSelect.value;
    const lessonDay = datetimeInput.value;
    
    
    if (!username || !phone || !email || !course || !lessonDay) {
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
    
   
    const selectedDate = new Date(lessonDay);
    const now = new Date();
    if (selectedDate <= now) {
        alert('Please select a future date and time!');
        return;
    }
    
    
    bookButton.disabled = true;
    bookButton.textContent = 'BOOKING...';
    
    try {
        
        const response = await fetch(`${API_URL}/api/trial-lesson/book`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                phone,
                email,
                course,
                lessonDay
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            
            alert('Trial lesson booked successfully! We will contact you soon.');
            
            
            usernameInput.value = '';
            numberInput.value = '';
            emailInput.value = '';
            courseSelect.selectedIndex = 0;
            datetimeInput.value = '';
            
            // Redirect to home page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            
            alert(`Error: ${data.error || 'Failed to book lesson. Please try again.'}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Connection error! Please try again.');
    } finally {
        
        bookButton.disabled = false;
        bookButton.textContent = 'BOOK LESSON';
    }
}


bookButton.addEventListener('click', bookTrialLesson);

// Submit on Enter key press
const formInputs = [usernameInput, numberInput, emailInput, datetimeInput];
formInputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            bookTrialLesson(e);
        }
    });
});


// script.js
 //let's add interactivity to the try free lesson buttons

 /*  const freelessBtn = document.querySelectorAll(".freeless-btn");

  freelessBtn.forEach(button => { 
      button.onclick = () => {
      window.location = "freeless.html"}
    });

  // let's add interactivity to the enroll button.

  const enroll = document.querySelectorAll(".enrollBtn");

  enroll.forEach(button => {
    button.onclick = () =>{
    window.location = "freeless.html"}
  }); */
});