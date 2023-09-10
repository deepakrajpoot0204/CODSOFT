document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('booking-form');
    const confirmationDiv = document.getElementById('booking-confirmation');

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const departureDate = document.getElementById('departure-date').value;
        const returnDate = document.getElementById('return-date').value;

        // You can perform validation here if needed

        // Display booking confirmation
        const confirmationMessage = `Booking confirmed from ${from} to ${to} from ${departureDate} to ${returnDate}.`;
        confirmationDiv.textContent = confirmationMessage;
    });
});
