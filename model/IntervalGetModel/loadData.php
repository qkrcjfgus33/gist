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





$query = "SELECT * FROM  `buoy`";

$result = $conn->query($query);
$bouyData = array();

if ($result->num_rows > 0) {
    // bouyData bouyData of each row
    while($row = $result->fetch_assoc()) {
    	array_push($bouyData, array(
    		'id' 		=> $row['id'],
    		'name' 		=> $row['name'],
    		'latitude' 	=> $row['latitude'],
    		'longitude' => $row['longitude'],
    		'activity' 	=> $row['activity']
    	));
    }
}



$lastData = array();
foreach($bouyData as $key => $val){
	$bouy_search_id 		= $val['id'];
	$bouy_search_name 		= $val['name'];
	$bouy_search_latitude 	= $val['latitude'];
	$bouy_search_longitude 	= $val['longitude'];
	$bouy_search_activity 	= $val['activity'];

	$atomosphereData = array(
		'id'				=> $bouy_search_id,
		'name'				=> $bouy_search_name,
		'latitude'			=> $bouy_search_latitude,
		'longitude'			=> $bouy_search_longitude,
		'activity'			=> $bouy_search_activity
	);

	if($bouy_search_activity == 1){

		$query = "SELECT 
		atmosphere.name as atmosphere_name, 
		atmosphere.id as atmosphere_id,
		data  
		FROM `atmosphere_data` 
		left join `buoy` on buoy.id = atmosphere_data.buoy_id 
		left join `atmosphere` on atmosphere.id = atmosphere_data.atomsphere_id 
		WHERE `atmosphere_data`.`datetime` = '".$last_datetime."' AND `buoy_id` = ".$bouy_search_id;


		$result = $conn->query($query);

		if ($result->num_rows > 0) {
			$atomosphereData['datetime'] = $last_datetime;

		    while($row = $result->fetch_assoc()) {
		    	$atomosphereData[$row['atmosphere_name']."_id"] = $row['atmosphere_id'];
		    	$atomosphereData[$row['atmosphere_name']] = $row['data'];
		    }
		}
	}

	array_push($lastData, $atomosphereData);
}

echo json_encode($lastData);
//JSON.parse(decodeURIComponent(data));