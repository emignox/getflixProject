<?php

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');

session_start();


require("./db_connection.php");

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit;
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle actual POST request

    $data = json_decode(file_get_contents("php://input"), true);
    $username = test_input($data['username']);
    $password = test_input($data['password']);

    if (empty($username) || empty($password)) {
        echo json_encode(["message" => "Veuillez saisir un nom d'utilisateur et un mot de passe"]);
    } else {
        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $query = $conn->prepare("SELECT * FROM users WHERE username = ?");
        $query->execute([$username]);
        $user = $query->fetch();

        if ($password === $user["password"]) {
            $_SESSION['USERNAME'] = $username;
            $_SESSION['ROLE'] = $user['role'];
            echo json_encode(["message" => "Connexion réussie", "user" => $user]);
        } else {
            echo json_encode(["message" => "Nom d'utilisateur ou mot de passe incorrect"]);
        }
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Méthode non autorisée"]);
}

$conn = null;
