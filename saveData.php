<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	


<?php
//echo_error();
/*
$ip = $_SERVER['REMOTE_ADDR'];
print_log('connect ip: '.$ip);
if($ip != '127.0.0.1'){
	exit();
}
*/




$intervalMilliseconds = 5000;

//setInterval(insert, $intervalMilliseconds);
insert();

function insert(){
	$servername = "localhost";
	$username = "gist";
	$password = "qF5asL7umdsaPqXv";
	$dbname = "gist";

	$now = date("Y-m-d H:i:s",time());

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	$conn->query("set names utf8");

	// Check connection
	if ($conn->connect_error) {
		print_log("Connection failed: " . $conn->connect_error);
	    die();
	} 
	print_log("Connected successfully");

	$query = "SELECT * FROM  `atmosphere`";

	$result = $conn->query($query);
	$atomosphereData = array();

	if ($result->num_rows > 0) {
	    // atomosphereData atomosphereData of each row
	    while($row = $result->fetch_assoc()) {
	    	$atomosphereData[$row['name']] = $row['id'];
	    }
	}




	print_log('');
	print_log('');




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
	    		'longitude' => $row['longitude'],
	    	));
	    }
	}

	print_log('');
	print_log('');


	print_log(print_r($atomosphereData, true));



	print_log(print_r($bouyData, true));


	print_log('');
	print_log('');

	print_log('query list');

	foreach($bouyData as $bouyDataKey => $bouyDataVal){
		foreach($atomosphereData as $atomosphereDataKey => $atomosphereID){
			sprintf("SELECT id FROM  `area` WHERE  `latitude` = %f AND  `longitude` = %f LIMIT 0 , 1",$latitude,$longitude);
			$query = sprintf("INSERT INTO `gist`.`atmosphere_data` (`buoy_id`, `atomsphere_id`, `data`, `datetime`) VALUES ('%d', '%d', '%f', '%s');",
				$bouyDataVal['id'], $atomosphereID, mt_rand(30000, 200000)/10000, $now);
			$result = $conn->query($query);
			
			print_log($query);
		}
	}
}

function print_log($log_txt){
	$log_dir = "log";
	echo $log_dir."/log.txt";
	$log_file = fopen($log_dir."/log.txt", "a");  
	fwrite($log_file, $log_txt."\r\n");  
	fclose($log_file); 
}

function setInterval($f, $milliseconds)
{
    $seconds=(int)$milliseconds/1000;
    while(true)
    {
        $f();
        sleep($seconds);
    }
}
?>

<script>
var i = 60;
document.body.innerHTML = i + '초 후 insert';
setInterval(function(){
	i--;
	document.body.innerHTML = i + '초 후 insert';
	}, 1000);
	setTimeout(function(){
		location.reload();
	}, i * 1000);
</script>

</body>
</html>