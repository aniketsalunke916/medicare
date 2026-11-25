
const dateInput = document.getElementById("date");

const today = new Date();
const localDate = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

dateInput.min = localDate;

function selectDoctor(name) {
    document.getElementById("doctor").value = name;
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("patientName").value;
    const doctor = document.getElementById("doctor").value;
    const date = dateInput.value;

    document.getElementById("message").textContent =
        `Thank you ${name}! Your appointment request with ${doctor} for ${date} has been received.`;

    this.reset();
    dateInput.min = localDate;
});
