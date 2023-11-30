<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

session_start();

// MySQL Database Connection
$host = "localhost";
$user_name = "root";
$user_password = "root";
$database = "streamify";

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $user_name, $user_password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo json_encode(["message" => "connected to the database"]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection error: " . $e->getMessage()]);
    exit;
}


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit; 
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $data = json_decode(file_get_contents("php://input"), true);
    $userId = test_input($data['userId']); // Assuming userId is included in the request

    if (empty($userId)) {
        echo json_encode(["message" => "Veuillez fournir l'ID de l'utilisateur à supprimer"]);
    } else {
        // Check if the user exists
        $query = $conn->prepare("SELECT * FROM users WHERE id = ?");
        $query->execute([$userId]);
        $user = $query->fetch();

        if (!$user) {
            echo json_encode(["message" => "Utilisateur non trouvé"]);
        } else {
            // Delete the user from the database
            $deleteQuery = $conn->prepare("DELETE FROM users WHERE id = ?");
            $deleteQuery->execute([$userId]);

            echo json_encode(["message" => "Utilisateur supprimé avec succès"]);
        }
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Méthode non autorisée"]);
}
