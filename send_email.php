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
        $smtpPassword = getenv('SMTP_PASSWORD');
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'oceanboy989@gmail.com';
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Recipients
        $mail->setFrom('oceanboy989@gmail.com', "Emilia's Della Roma");
        $mail->addAddress($email, "$firstname $lastname");

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'Your Booking Confirmation from Emilia\'s Della Roma';
        $mail->AddEmbeddedImage('assets/icons/logo.png', 'logoCID');
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
