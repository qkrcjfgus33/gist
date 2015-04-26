<?php
$servername = "localhost";
$username = "gist";
$password = "qF5asL7umdsaPqXv";
$dbname = "gist";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$conn->query("set names utf8");

// Check connection
if ($conn->connect_error) {
    echo_error();
}

$latitude = (float)$_GET['latitude'];
$longitude = (float)$_GET['longitude'];

if($latitude < 0 || $longitude < 0 ){
    echo_error();
}

$query = sprintf("SELECT count(latitude) FROM  `atmosphere` WHERE  `latitude` = %f AND  `longitude` = %f", $latitude, $longitude);

$result = $conn->query($query);

if ($result->num_rows > 0) {
    // data data of each row
    while($row = $result->fetch_assoc()) {
        $totalPageNum = ((int)$row['count(latitude)']) - 1;
        break;
    }
}else{
    echo_error();
}

echo $totalPageNum;

function echo_error(){
    echo 'error!';
    exit();
}
?>