<?php
$emailAddress = htmlentities(trim($_POST['emailAddress'] ??''));
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    if (!empty($emailAddress) && filter_var($emailAddress, FILTER_VALIDATE_EMAIL)) {
        // Extract the domain part of the email
        $domain = strtolower(substr(strrchr($emailAddress, "@"), 1));

        // Check if it's gmail.com or outlook.com
        if ($domain === "gmail.com" || $domain === "outlook.com" || $domain === "hotmail.com") {
            echo "<p style='color:white;'>Thanks for signing up, we will get back to you with amazing offers on this email: " . htmlspecialchars($emailAddress) . "</p>";
        } else {
            echo "<p style='color:white;'>Only Gmail, Outlook & Hotmail addresses are allowed.</p>";
        }
    } else {
        echo "<p style='color:white;'>Please enter a valid email address.</p>";
    }
} else {
    echo "<p>Invalid request!</p>";
}
