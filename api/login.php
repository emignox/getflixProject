<?php
header('Access-Control-Allow-Origin: http://localhost:5173/');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');

  
header("Content-Type: application/json");

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

$success = false;

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $data = json_decode(file_get_contents("php://input"), true);
    $username = test_input($data['username']);
    $password = test_input($data['password']);

    if (empty($username)) {
        echo json_encode(["message" => "Veuillez saisir un nom d'utilisateur"]);
    } elseif ($password) {
        echo json_encode(["message" => "Veuillez saisir un mot de passe valid"]);
    } else {

        $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
        $query = $conn->prepare("SELECT * FROM users WHERE username = ?");
        $query->execute([$username]);
        $user = $query->fetch();

        if (isset($user["username"]) && isset($user["password"])) {

            if ($password === $user["password"]) {
                session_start();
                $_SESSION['USERNAME'] = $username;
                if ($user['role'] === 'admin') {
                    $_SESSION['ROLE'] = 'admin';
                    echo json_encode(["message" => "Connection réussie"]);
                } elseif ($user['role'] === 'user') {
                    $_SESSION['role'] = 'user';
                    echo json_encode(["message" => "Connection réussie"]);
                }

            } else {
                echo json_encode(["message" => "Nom d'utilisateur ou mot de passe non valid"]);
            }

        } else {
            echo json_encode(["message" => "Nom d'utilisateur ou mot de passe non valid"]);
        }
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Method not allowed"]);
}
