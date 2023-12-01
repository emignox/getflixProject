<?php

/*
The frontend app can access this logout endpoint by making a GET request 
to something like http://localhost:8888/api/logout.php?action=logout
*/ 

header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');


session_start();

require("./db_connection.php");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit; 
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Logout endpoint
    if (isset($_GET['action']) && $_GET['action'] === 'logout') {
        session_destroy();
        echo json_encode(["message" => "Déconnexion réussie"]);
    } else {
        echo json_encode(["error" => "Action non autorisée"]);
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["error" => "Méthode non autorisée"]);
}
