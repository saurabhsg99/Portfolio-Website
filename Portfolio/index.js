var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var sbmtError = document.getElementById('form-error');

var typeData = new Typed(".role", {
    strings: [
        "Coder",
        "Frontend Developer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

const userimg = document.querySelector("#submit-btn");
function random(number){
    return Math.floor(Math.random()*(number + 1));
}
function changebg(){
    const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`;
    userimg.style.backgroundColor = randomColor;
}
userimg.addEventListener("mouseover", changebg);




function validateName() {
    var name = document.getElementById('contact-name').value;
    if (name.length == 0)
    {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (name.length < 3) {
        nameError.innerHTML = "Minimum 3 character is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('contact-email').value;
    if (email.length == 0) {
        emailError.innerHTML = "Email is  required";
        return false;
    }

    if (!email.match(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([com]{3})$/)) {
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}


function validateForm() {
    if (!validateName() || !validateEmail() ) {
        sbmtError.style.display = 'block';
        sbmtError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { sbmtError.style.display = 'none'; }, 3000);
        return false;
    }
}

