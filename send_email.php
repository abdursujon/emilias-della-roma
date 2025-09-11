<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Safely collect inputs
    $firstname = $_POST['firstname'] ?? '';
    $lastname = $_POST['lastname'] ?? '';
    $telephone = $_POST['telephone'] ?? '';
    $email = $_POST['email'] ?? '';
    $notes = $_POST['notes'] ?? '';
    $selectedRestaurant = $_POST['restaurant'] ?? '';
    $selectedDate = $_POST['date'] ?? '';
    $selectedTime = $_POST['time'] ?? '';
    $selectedGuestNumber = $_POST['guests'] ?? '';

    $mail = new PHPMailer(true);

    try {
        $smtpPassword = getenv('SMTP_PASSWORD');
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'oceanboy989@gmail.com';
        $mail->Password = $smtpPassword; // app password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
 //setx SMTP_PASSWORD "wwli lqst okby wkqv"

        // Recipients
        $mail->setFrom('oceanboy989@gmail.com', "Emilia's Della Roma");
        $mail->addAddress($email, "$firstname $lastname");

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Your Booking Confirmation from Emilia\'s Della Roma';
        $mail->AddEmbeddedImage('assets/logo.png', 'logoCID');
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
            <p style='text-align:left;'>
            <img src='cid:logoCID' alt='Emilia&apos;s Della Roma Logo' style='width:150px;'>
            </p>
            
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
        echo "Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo "Invalid request.";
}
