document.addEventListener('DOMContentLoaded', function () {
    // Find all forms with the ID 'signup-form'
    const signupForms = document.querySelectorAll("#signup-form");

    signupForms.forEach(form => {
        form.addEventListener("submit", async function (e) {
            e.preventDefault(); // stop page reload

            const formData = new FormData(form);
            const responseElement = form.nextElementSibling; // Get the <p> tag right after the form

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: formData
                });

                const result = await response.text();
                responseElement.innerHTML = result;
                responseElement.style.display = "block";
                form.reset();
            } catch (error) {
                responseElement.innerHTML = "Something went wrong. Please try again.";
                responseElement.style.display = "block";
            }
        });
    });
});