<?php
$apiKey = '01fd56a673d7b722de210fadfb094f1f';

function makeApiRequest($url) {
    global $apiKey;
    $separator = strpos($url, '?') === false ? '?' : '&';
    $fullUrl = $url . $separator . "api_key=$apiKey";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $fullUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30); // Définir un délai d'attente

    $response = curl_exec($ch);

    if ($response === FALSE) {
        die("Erreur lors de la récupération des données: " . curl_error($ch));
    }

    curl_close($ch);
    return json_decode($response, true);
}