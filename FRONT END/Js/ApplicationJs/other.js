var API_URL = "https://localhost:7086/"
const ApplicationLoginForm = document.getElementById("loginForm");

ApplicationLoginForm.addEventListener("submit", async (event) => {
  alert("Called the click event");
  event.preventDefault(); // Prevent the default ApplicationLoginForm submission

  // Collect ApplicationLoginForm data
  const formData = new FormData(ApplicationLoginForm);
  const data = Object.fromEntries(formData.entries()); // Convert FormData to a plain object

  try {
    // Send data to API endpoint
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Parse and display response
    if (response.ok) {
      const result = await response.json();
      alert(`Success: ${JSON.stringify(result)}`);
    } else {
      const error = await response.json();
      alert(`Error: ${error.message || "An error occurred"}`);
    }
  } catch (err) {
    console.error("Error submitting ApplicationLoginForm:", err);
    alert("Failed to submit ApplicationLoginForm. Please try again.");
  }
});
