<?php
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__.'/../config.php');



//get last_datetime
$query = "SELECT datetime 
FROM  `atmosphere_data` 
ORDER BY  `atmosphere_data`.`datetime` DESC LIMIT 0 , 1";

$result = $conn->query($query);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $last_datetime = $row['datetime'];
    }
}



//get bouyData
$query = "SELECT * 
FROM  `buoy` 
WHERE  `activity` = 1";

$result = $conn->query($query);
$bouyData = array();

if ($result->num_rows > 0) {
    // bouyData bouyData of each row
    while($row = $result->fetch_assoc()) {
        $bouyData[$row['id']] =  array(
            'name'      => $row['name'],
            'latitude'  => $row['latitude'],
            'longitude' => $row['longitude']
        );
    }
}




//join atmosphere_data
foreach($bouyData as $key => &$val){
    $data = array();
    $bouy_search_id = $key;

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
        while($row = $result->fetch_assoc()) {
            $data[$row['atmosphere_id']] = array(
                'name'  => $row['atmosphere_name'],
                'data'  => $row['data']
            );
        }
    }

    $val['data'] = $data;
}


//join
$joinData = array(
    'last_datetime' => $last_datetime,
    'bouy'          => $bouyData
);

header('Content-Type: application/json');
echo json_encode($joinData);