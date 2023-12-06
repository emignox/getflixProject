<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type: application/json');
header('Access-Control-Allow-Credentials: true');

include 'connect_db.php';

$api_key = '01fd56a673d7b722de210fadfb094f1f';
$url = 'https://api.themoviedb.org/3/tv/top_rated';
$params = ['api_key' => $api_key];
$query_string = http_build_query($params);
$full_url = $url . '?' . $query_string;

$response = file_get_contents($full_url);

if ($response !== false) {
    $data = json_decode($response, true);
    $top_rated_series = $data['results'];

    foreach ($top_rated_series as $series) {
        $series_id = $series['id'];
        $series_name = $series['name'];
        $series_rating = $series['vote_average'];

        echo "Series ID: $series_id, Name: $series_name, Rating: $series_rating\n";
    }
} else {
    echo "Error fetching data from API\n";
}
?>