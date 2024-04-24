document.addEventListener('DOMContentLoaded', () => {
    let isOpen = false;
    const hamburger = document.getElementById('hamburger');
    const icon = document.querySelector('#hamburger i');
    const menu = document.querySelector('.menu');
    const item = document.querySelector('.item');

    item.addEventListener('on', () => {
      document.querySelector('.footer-container nav ul li.dropdown-item').style.display = 'block';
    })

    hamburger.addEventListener('click', () => {
        isOpen = !isOpen;
        if(isOpen) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
            menu.style.display = 'block'
        }else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
            menu.style.display = 'none'
        }
    })
})


function submitForm(event) {
    event.preventDefault();

    const form = document.getElementById("registrationForm");
    const formData = new FormData(form);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
  
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
  
  
    alert("Registration successful!");
  }
  function showDropdown() {
    document.getElementById("myDropdown").style.display = "block";
  }
  
  function hideDropdown() {
    document.getElementById("myDropdown").style.display = "none";
  }

  function calculatePayment() {
    var paymentFrequency = document.getElementById("payment-frequency").value;
    var amountElement = document.getElementById("amount");
    
    if (paymentFrequency === "daily") {
      amountElement.textContent = "$10 per day";
    } else if (paymentFrequency === "monthly") {
      amountElement.textContent = "$200 per month";
    } else if (paymentFrequency === "yearly") {
      amountElement.textContent = "$2000 per year";
    }
  }
  
  