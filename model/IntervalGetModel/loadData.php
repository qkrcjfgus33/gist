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
    die("Connection failed: " . $conn->connect_error);
}


$query = "SELECT datetime FROM  `atmosphere_data` ORDER BY  `atmosphere_data`.`datetime` DESC LIMIT 0 , 1";

$result = $conn->query($query);
$atmosphereData = array();

if ($result->num_rows > 0) {
    // atmosphereData atmosphereData of each row
    while($row = $result->fetch_assoc()) {
    	$last_datetime = $row['datetime'];
    }
}





$query = "SELECT * FROM  `buoy` WHERE  `activity` =1";

$result = $conn->query($query);
$bouyData = array();

if ($result->num_rows > 0) {
    // bouyData bouyData of each row
    while($row = $result->fetch_assoc()) {
    	array_push($bouyData, array(
    		'id' 		=> $row['id'],
    		'name' 		=> $row['name'],
    		'latitude' 	=> $row['latitude'],
    		'longitude' => $row['longitude']
    	));
    }
}



$lastData = array();
foreach($bouyData as $key => $val){
	$bouy_search_id 		= $val['id'];
	$bouy_search_name 		= $val['name'];
	$bouy_search_latitude 	= $val['latitude'];
	$bouy_search_longitude 	= $val['longitude'];

	$atomosphereData = array(
		'name'				=> $bouy_search_name,
		'latitude'			=> $bouy_search_latitude,
		'longitude'			=> $bouy_search_longitude,
		'datetime'			=> $last_datetime
	);

	$query = "SELECT atmosphere.name as atmosphere_name, data  FROM `atmosphere_data` left join `buoy` on buoy.id = atmosphere_data.buoy_id left join `atmosphere` on atmosphere.id = atmosphere_data.atomsphere_id WHERE `atmosphere_data`.`datetime` = '".$last_datetime."' AND `buoy_id` = ".$bouy_search_id;


	$result = $conn->query($query);

	if ($result->num_rows > 0) {
	    while($row = $result->fetch_assoc()) {
	    	$atomosphereData[$row['atmosphere_name']] = $row['data'];
	    }
	}

	array_push($lastData, $atomosphereData);
}

echo json_encode($lastData);
//JSON.parse(decodeURIComponent(data));