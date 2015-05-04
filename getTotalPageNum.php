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
$bouy_id = (int)$_GET['bouy_id'];

$query = "SELECT count(buoy_id) 
FROM  `atmosphere_data` 
WHERE  `buoy_id` =".$bouy_id;

$result = $conn->query($query);

if ($result->num_rows > 0) {
    // data data of each row
    while($row = $result->fetch_assoc()) {
        $totalPageNum = ((int)$row['count(buoy_id)']) - 1;
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