document.getElementById("toggleDark").onclick = () => {
    document.body.classList.toggle("dark");
};


document.getElementById("contactForm")?.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    if (name === "" || email === "" || message === "") {
        error.textContent = "❌ All fields are required!";
        error.style.color = "red";
    } else {
        error.textContent = "✅ Message Sent Successfully!";
        error.style.color = "green";
        this.reset();
    }
});


const eduBox = document.querySelector(".education-box");

if (eduBox) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                eduBox.classList.add("show-education");
            }
        });
    });

    observer.observe(eduBox);
}


