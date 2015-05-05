<?php
define('__ROOT__', dirname(dirname(__FILE__)));
require_once(__ROOT__.'/../config.php');



//get last_datetime
$query = "SELECT * 
FROM  `atmosphere_limit` ";

$data = array();
$result = $conn->query($query);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        if(!isset($data[$row['buoy_id']])){
            $data[$row['buoy_id']] = array(
                'data'  => array()
            );
        }
        $data[$row['buoy_id']]['data'][$row['atomsphere_id']] = array(
            'max'           => $row['max'],
            'min'           => $row['min']
        );
    }
}

header('Content-Type: application/json');
echo json_encode($data);