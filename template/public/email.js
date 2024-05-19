function sendEmail() {
    const emailInput = document.getElementById('mailinput');
    const emailAddress = emailInput.value;
    if (emailAddress) {
        window.confirm(`Email has been sent to ${emailAddress}`);
    } else {
        window.alert(`Enter your email address `);
    
    }

}
const button=document.getElementById('mail');
button.addEventListener('click',sendEmail);

