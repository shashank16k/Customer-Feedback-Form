document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Perform validation
        let isValid = true;
        for (const key in formDataObject) {
            if (formDataObject[key].trim() === "") {
                isValid = false;
                alert("Please fill out all fields.");
                break;
            }
        }

        // If form data is valid, you can submit it to the server or perform other actions
        if (isValid) {
            // Example: Submit form data to the server using AJAX
            // Replace '#' with your actual server endpoint
            fetch("const endpoint = "https://example.com/submit-form";
            , {
                method: "POST",
                body: JSON.stringify(formDataObject),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.ok) {
                    // Handle successful submission
                    alert("Form submitted successfully!");
                    form.reset(); // Clear form fields after submission
                } else {
                    // Handle errors
                    alert("Error submitting form.");
                }
            })
            .catch(error => {
                console.error("Error:", error);
                alert("Error submitting form.");
            });
        }
    });
});
