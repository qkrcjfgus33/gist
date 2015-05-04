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

$query = "SELECT * 
FROM  `atmosphere`";

//echo $query;
$result = $conn->query($query);
$data = array();

if ($result->num_rows > 0) {
    // data data of each row
    while($row = $result->fetch_assoc()) {
        array_push($data, array(
        	'id'	=> $row['id'],
        	'name'	=> $row['name']
        ));
    }
}

echo json_encode($data);

function echo_error(){
    echo 'error!';
    exit();
}
?>