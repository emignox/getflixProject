<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include 'connect_db.php';

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
    
    $username = $data["username"];
    $email = $data["email"];
    $password = $data["password"];
    $role = $data["role"] ?? '';
   
    try {
        $queryRegister = $conn->prepare("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)");
        $queryRegister->execute([$username, $email, $password, $role]);
        echo createResponse("200", "Successfully registered");
    } catch (PDOException $e) {
        error_log("Database Error: " . $e->getMessage());
        
        echo createResponse("500", "Internal Server Error");
        exit;
    }
} 
?>