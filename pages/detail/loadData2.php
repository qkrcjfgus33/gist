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
$startDatetime = $_GET['startDatetime'];
$endDatetime = $_GET['endDatetime'];

$timezone = new DateTimeZone('UTC'); 

$startDatetime = DateTime::createFromFormat('Y-m-d H:i', $startDatetime, $timezone);
$startDatetime = $startDatetime->format('Y-m-d H:i:s');

$endDatetime = DateTime::createFromFormat('Y-m-d H:i', $endDatetime, $timezone);
$endDatetime = $endDatetime->format('Y-m-d H:i:s');

if($bouy_id < 0 ){
    echo_error();
}

$query = "SELECT 
atmosphere.name as atmosphere_name, 
atmosphere_data.datetime as datetime, 
atmosphere.id as atmosphere_id, 
data
FROM `atmosphere_data` 
left join `buoy` on buoy.id = atmosphere_data.buoy_id 
left join `atmosphere` on atmosphere.id = atmosphere_data.atomsphere_id 
WHERE  `datetime` <=  '".$endDatetime."'
AND `datetime` >=  '".$startDatetime."'
AND `buoy_id` = ".$bouy_id;

//echo $query;
$result = $conn->query($query);
$data = array();

$checkedDatetime;
$dataPart;
if ($result->num_rows > 0) {
    // data data of each row
    while($row = $result->fetch_assoc()) {
        if($checkedDatetime != $row['datetime']){
            $checkedDatetime = $row['datetime'];
            if(is_array($dataPart)){
                array_push($data, $dataPart);
            }
            $dataPart = array();
            $dataPart['datetime'] = $checkedDatetime;
        }
        $dataPart[$row['atmosphere_name']] = $row['data'];
    }
}

echo json_encode($data);

function echo_error(){
    echo 'error!';
    exit();
}
?>