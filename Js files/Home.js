function submitForm() {
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Construct Google Forms URL with form data as query parameters
    var googleFormsURL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7l9MbrrAjKCG0V7j_VMzNHaod_cEThqVoXG4PT8uZ_k9BSg/viewform';
    googleFormsURL += '?entry.1590315437=' + encodeURIComponent(name);
    googleFormsURL += '&entry.998583727=' + encodeURIComponent(email);
    googleFormsURL += '&entry.1534510054=' + encodeURIComponent(message);

    // Redirect to Google Forms URL
    window.location.href = googleFormsURL;
}

document.addEventListener("DOMContentLoaded", function () {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            var targetId = link.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                var targetPosition = targetElement.offsetTop;
                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide the back to top button based on scroll position
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}