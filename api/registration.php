<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include 'connect_db.php';

/* Namespace alias. */
/*use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;*/
/* Include the Composer generated autoload.php file. */
/*require 'C:\wamp64\www\getflixProject\phpmailer\vendor\autoload.php';*/
/* If you installed PHPMailer without Composer do this instead: */
/*
require 'C:\PHPMailer\src\Exception.php';
require 'C:\PHPMailer\src\PHPMailer.php';
require 'C:\PHPMailer\src\SMTP.php';
*/


function createResponse($status, $message)
{
    $response = [
        'status' => $status,
        'message' => $message
    ];
    return json_encode($response);
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data["username"]) || !isset($data["email"]) || !isset($data["password"])) {
        echo createResponse('Error 401', 'Data missing');
        exit;
    } 
    
    $firstname = $data["firstname"];
    $lastname = $data["lastname"];
    $username = $data["username"];
    $email = $data["email"];
    $password = $data["password"];
    $role = $data["role"] ?? '';
    $created_at = date_create()->format("Y-m-d H:i:s");
   
    $checkUserQuery = $conn->prepare("SELECT COUNT(*) FROM users WHERE username = ? OR email = ?");
    $checkUserQuery->bind_param("ss", $username, $email); // Bind parameters
    $checkUserQuery->execute();
    $checkUserQuery->bind_result($userCount); // Bind result variable
    $checkUserQuery->fetch();
    $checkUserQuery->close();

    if ($userCount > 0) {
        echo createResponse('Error 409', 'Username or email already in use');
        exit;
    }

    try {
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $queryRegister = $conn->prepare("INSERT INTO users (firstname, lastname, username, email, password, role, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $queryRegister->bind_param("sssssss", $firstname, $lastname, $username, $email, $hashedPassword, $role, $created_at); // Bind parameters
        $queryRegister->execute();
        
        /* Create a new PHPMailer object. Passing TRUE to the constructor enables exceptions. */
        /*$mail = new PHPMailer(TRUE);*/

        /* Set the mail sender. */
        /*$mail->setFrom('', '');*/
        /* Add a recipient. */
        /*$mail->addAddress($email, $username);*/
        /* Set the subject. */
        /*$mail->Subject = 'Confirmation Email';*/
        /* Set the mail message body. */
        /*$mail->Body = 'Thank you for registering! Please click the following link to return on the website:';*/
        /* Finally send the mail. */
        /*$mail->send();*/
        
        
        echo createResponse("200", "Successfully registered");
    } catch (PDOException $e) {
        error_log("Database Error: " . $e->getMessage());
        
        echo createResponse("500", "Internal Server Error");
        exit;
    }
} 
?>