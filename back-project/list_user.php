<?php
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include 'connect_db.php';

$requete = "SELECT * FROM `contact` ORDER BY `created_at` DESC";

?>