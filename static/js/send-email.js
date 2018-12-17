
function sendMail(contactForm) {
    emailjs.send("gmail", "online_cv", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "phone": contactForm.phone.value,
        "message": contactForm.message.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
                document.getElementById('message-response').innerHTML = "Your email has been sent. <i class='fa fa-check'aria-hidden='true'></i>"
                var form = document.getElementById("contact-form");
                form.reset();
            },
            function (error) {
                console.log("FAILED", error)
                document.getElementById('message-response').innerHTML = "The email had failed to send."
            }
        );
    return false;
}