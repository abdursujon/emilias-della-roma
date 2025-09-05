<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Safely collect inputs
    $firstname          = $_POST['firstname'] ?? '';
    $lastname           = $_POST['lastname'] ?? '';
    $telephone          = $_POST['telephone'] ?? '';
    $email              = $_POST['email'] ?? '';
    $notes              = $_POST['notes'] ?? '';
    $selectedRestaurant = $_POST['restaurant'] ?? '';
    $selectedDate       = $_POST['date'] ?? '';
    $selectedTime       = $_POST['time'] ?? '';
    $selectedGuestNumber= $_POST['guests'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'oceanboy989@gmail.com';
        $mail->Password   = 'wwli lqst okby wkqv'; // app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom('oceanboy989@gmail.com', "Emilia's Della Roma");
        $mail->addAddress($email, "$firstname $lastname");

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Booking Confirmation - Emilia\'s Della Roma';

        $mail->Body = "
            <h2>Your Booking Confirmation</h2>
            <p><strong>Name:</strong> $firstname $lastname</p>
            <p><strong>Telephone:</strong> $telephone</p>
            <p><strong>Email:</strong> $email</p>
            <hr>
            <h3>Booking Details</h3>
            <p><strong>Restaurant:</strong> $selectedRestaurant</p>
            <p><strong>Date:</strong> $selectedDate</p>
            <p><strong>Time:</strong> $selectedTime</p>
            <p><strong>Number of Guests:</strong> $selectedGuestNumber</p>
            <p><strong>Notes:</strong> $notes</p>
        ";

        $mail->AltBody = "Your Booking Confirmation:\n
        Name: $firstname $lastname\n
        Telephone: $telephone\n
        Email: $email\n
        Restaurant: $selectedRestaurant\n
        Date: $selectedDate\n
        Time: $selectedTime\n
        Guests: $selectedGuestNumber\n
        Notes: $notes";

        $mail->send();
        echo 'Booking confirmation email has been sent.';
    } catch (Exception $e) {
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
