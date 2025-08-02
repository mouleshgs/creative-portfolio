const form = document.querySelector("#contact-form");

form.addEventListener("submit", async (e) => {
e.preventDefault();

  const name = e.target.elements.name.value;
  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;

const bodyJSON = JSON.stringify({ name, email, message });


try {
    const response = await fetch("https://creative-portfolio-97fw.onrender.com/contact", {
        method: "POST",
        headers: {
            "content-type": "application/json", 
        },

        body: bodyJSON,
    });

    if (response.ok) {
        alert("Message is sent successfully!");
        form.reset();
    } else {
        alert("Failed to send message.");

    }
} catch (error) {
    console.log("error: ", error);
    alert("Cannot reach the server now. try again later");
    form.reset();
}
});
