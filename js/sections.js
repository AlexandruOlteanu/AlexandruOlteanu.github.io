fetch("/Sections/topbar-section.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        let query = document.querySelector("topbar-section");
        if (query != null) {
            document.querySelector("topbar-section").innerHTML = data;
        }
});

fetch("/Sections/navbar-section.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        let query = document.querySelector("navbar-section");
        if (query != null) {
            document.querySelector("navbar-section").innerHTML = data;
        }
});

fetch("/Sections/testimonial-section.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        let query = document.querySelector("testimonial-section");
        if (query != null) {
            document.querySelector("testimonial-section").innerHTML = data;
        }
});

fetch("/Sections/contact-section.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        let query = document.querySelector("contact-section");
        if (query != null) {
            document.querySelector("contact-section").innerHTML = data;
        }
});

fetch("/Sections/vendors-section.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        let query = document.querySelector("vendors-section");
        if (query != null) {
            document.querySelector("vendors-section").innerHTML = data;
        }
});

fetch("/Sections/footer-section.html")
    .then(response => {
        return response.text();
    })
    .then(data => {
        let query = document.querySelector("footer-section");
        if (query != null) {
            document.querySelector("footer-section").innerHTML = data;
        }
});