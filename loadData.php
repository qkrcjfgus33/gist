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
$startPageNum = (int)$_GET['startPageNum'];
$viewPageNum = (int)$_GET['viewPageNum'];

if($latitude < 0 || $longitude < 0 || $startPageNum < 0 || $viewPageNum < 0 ){
    echo_error();
}

$query = sprintf("SELECT * FROM  `atmosphere` WHERE  `latitude` = %f AND  `longitude` = %f LIMIT %d , %d", $latitude, $longitude, $startPageNum, $viewPageNum);
$result = $conn->query($query);
$data = array();

if ($result->num_rows > 0) {
    // data data of each row
    while($row = $result->fetch_assoc()) {
        array_push($data, array(
        	'date'				=>$row['date'],
        	'time'				=>$row['time'],
        	'water temperature'	=>$row['water temperature'],
        	'pH'				=>$row['pH'],
        	'salinity'			=>$row['salinity'],
        	'battery voltage'	=>$row['battery voltage']
        ));
    }
}

echo json_encode($data);

function echo_error(){
    echo 'error!';
    exit();
}
/*
function getAreaID($conn, $latitude, $longitude){
    $query = sprintf("SELECT id FROM  `area` WHERE  `latitude` = %f AND  `longitude` = %f LIMIT 0 , 1",$latitude,$longitude);
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            return (int)$row['id'];
        }
    } else {
        echo_error();
    }
}
*/
?>