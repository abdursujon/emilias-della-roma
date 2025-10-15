<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer manually (no Composer)
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Safely collect inputs

    $firstname = htmlentities($_POST['firstname'] ?? '');
    $lastname = htmlentities($_POST['lastname'] ?? '');
    $telephone = htmlentities($_POST['telephone'] ?? '');
    $email = htmlentities($_POST['email'] ?? '');
    $notes = htmlentities($_POST['notes'] ?? '');
    $selectedRestaurant = htmlentities($_POST['restaurant'] ?? '');
    $selectedDate = htmlentities($_POST['date'] ?? '');
    $selectedTime = htmlentities($_POST['time'] ?? '');
    $selectedGuestNumber = htmlentities($_POST['guests'] ?? '');

    $mail = new PHPMailer(true);

    try {
        // Load the configuration file from the protected 'config' directory.
        $configFile = __DIR__ . '/config/email_config.php';
        if (!file_exists($configFile)) {
            throw new Exception('Server configuration error. Please contact support.');
        }
        require_once $configFile;

        // SendGrid SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.sendgrid.net';
        $mail->SMTPAuth = true;
        $mail->Username = 'apikey'; // This is the literal string 'apikey' for SendGrid
        $mail->Password = SMTP_PASSWORD; // The API key from your config file
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        // This 'From' address MUST be the one you verified as a Single Sender in SendGrid.
        $mail->setFrom('emilliasdellaroma@gmail.com', "Emilia's Della Roma");
        $mail->addAddress($email, "$firstname $lastname");

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Your Booking Confirmation from Emilia\'s Della Roma';
        $mail->Body = "
            <h2 style='color:#ff6900;'> Ciao $firstname $lastname, here is your booking confirmation with Emilia's Della Roma!<h2>
            <p><strong>Name:</strong> $firstname $lastname</p>
            <p><strong>Telephone:</strong> $telephone</p>
            <hr>
            <h3>Booking Details</h3>
            <p><strong>Restaurant:</strong> $selectedRestaurant</p>
            <p><strong>Date:</strong> $selectedDate</p>
            <p><strong>Time:</strong> $selectedTime</p>
            <p><strong>Number of Guests:</strong> $selectedGuestNumber</p>
            <p><strong>Your Request:</strong> $notes</p> <br>
            <p>Thank you for booking with us, we look forward to seeing you $firstname.</p> 
            <p>Regards<p>
            <p>Emilia's<p>
            
        ";

        $mail->AltBody = "Ciao $firstname $lastname, here is your booking confirmation with Emilia's Della Roma!\n
        Name: $firstname $lastname\n
        Telephone: $telephone\n
        Restaurant: $selectedRestaurant\n
        Date: $selectedDate\n
        Time: $selectedTime\n
        Guests: $selectedGuestNumber\n
        Notes: $notes";

        $mail->send();
        echo 'Booking confirmation email has been sent.';
    } catch (Exception $e) {
        // In a production environment, log the detailed error for the developer
        // and show a generic message to the user for security.
        error_log("Mailer Error: " . $mail->ErrorInfo);
        echo "We're sorry, there was an error sending your booking confirmation. Please contact the restaurant directly.";
    }
} else {
    echo "Invalid request.";
}
