<?php
echo_error();

$data = $_GET['data'];
$ip = $_SERVER['REMOTE_ADDR'];
if($ip != '127.0.0.1'){
	echo_error();
}
echo 'pass';

if(!checkData($data)){
	echo_error();
};

function checkData($data){
	if(!is_array($data)){
		return false;
	}
	foreach($data as $value){
		if(!isset($value['area name'])){
			return false;
		}
		if(!preg_match("/^\d{4}\-\d{2}\-\d{2}$/i",
			$value['date'])){
			return false;
		}
		if(!preg_match("/^\d{2}\:\d{2}\:\d{2}$/i",
			$value['time'])){
			return false;
		}
		return true;
	}

}

function echo_error(){
	echo 'error!';
	exit();
}

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
echo "Connected successfully";

//setID($conn, $data);
insertData($conn, $data);

function insertData($conn, $data){
	foreach($data as &$value){
		$query = sprintf("INSERT INTO `gist`.`atmosphere` (`latitude`, `longitude`, `date`, `time`, `water temperature`, `pH`, `salinity`, `battery voltage`) VALUES ('%f', '%f', '%s', '%s', '%f', '%f', '%f', '%f');",
		            (float)$value['latitude'],
		            (float)$value['longitude'],
		            $value['date'],
		            $value['time'],
		            (float)$value['water temperature'],
		            (float)$value['pH'],
		            (float)$value['salinity'],
		            (float)$value['battery voltage']);
		$result = $conn->query($query);
	}
}
/*
function setID($conn, &$data){
	foreach($data as &$value){
		$query = sprintf("SELECT id FROM  `area` WHERE  `latitude` = %f AND  `longitude` = %f LIMIT 0 , 1",
		            (float)$value['latitude'],
		            (float)$value['longitude']);
		$result = $conn->query($query);

		if ($result->num_rows > 0) {
		    // output data of each row
		    while($row = $result->fetch_assoc()) {
		        $value['id'] = $row['id'];
		    }
		} else {
		    echo_error();
		}
	}
}*/
?>