<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $car = $_POST["car"];

    // Compose email message
    $to = $email;
    $subject = "Booking Confirmation";
    $message = "Dear $name,\n\nThank you for booking $car. We will contact you shortly.\n\nRegards,\nYour Car Dealership";
    $headers = "From: your@email.com"; // Change this to your email address

    // Send email
    mail($to, $subject, $message, $headers);

    // Send a response back to the client
    echo "Email sent successfully!";
} else {
    // Handle other request methods if necessary
    echo "Invalid request method!";
}
?>
