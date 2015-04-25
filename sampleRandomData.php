<?php
$currentDate = date("Y-m-d");
$currentTime = date("H:i:s");
$data = array (
	array(
		'area name'			=>'광주과학기술원 공원',
		'latitude'			=>35.223376,
		'longitude'			=>126.842489,
		'date'				=>$currentDate,
		'time'				=>$currentTime,
		'water temperature'	=>mt_rand(30000, 200000)/10000,
		'pH'				=>mt_rand(30000, 200000)/10000,
		'salinity'			=>mt_rand(30000, 200000)/10000,
		'battery voltage'	=>mt_rand(30000, 200000)/10000
	),
	array(
		'area name'			=>'광주과학기술원',
		'latitude'			=>35.225234,
		'longitude'			=>126.841073,
		'date'				=>$currentDate,
		'time'				=>$currentTime,
		'water temperature'	=>mt_rand(30000, 200000)/10000,
		'pH'				=>mt_rand(30000, 200000)/10000,
		'salinity'			=>mt_rand(30000, 200000)/10000,
		'battery voltage'	=>mt_rand(30000, 200000)/10000
	),
	array(
		'area name'			=>'장성군 남면',
		'latitude'			=>35.233752,
		'longitude'			=>126.835709,
		'date'				=>$currentDate,
		'time'				=>$currentTime,
		'water temperature'	=>mt_rand(30000, 200000)/10000,
		'pH'				=>mt_rand(30000, 200000)/10000,
		'salinity'			=>mt_rand(30000, 200000)/10000,
		'battery voltage'	=>mt_rand(30000, 200000)/10000
	),
	array(
		'area name'			=>'광주 공원',
		'latitude'			=>35.216381,
		'longitude'			=>126.855857,
		'date'				=>$currentDate,
		'time'				=>$currentTime,
		'water temperature'	=>mt_rand(30000, 200000)/10000,
		'pH'				=>mt_rand(30000, 200000)/10000,
		'salinity'			=>mt_rand(30000, 200000)/10000,
		'battery voltage'	=>mt_rand(30000, 200000)/10000
	)
);

// 광주과학기술원 공원 35.223376, 126.842489
// 광주과학기술원 35.225234, 126.841073
// 장성군 남면 35.233752, 126.835709
// 광주 공원 35.216381, 126.855857

echo json_encode($data);
//JSON.parse(decodeURIComponent(data));