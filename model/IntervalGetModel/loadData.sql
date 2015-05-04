SELECT 
atmosphere.name as atmosphere_name, 
atmosphere.id as atmosphere_id,
data
FROM `atmosphere_data` 
left join `buoy` on buoy.id = atmosphere_data.buoy_id 
left join `atmosphere` on atmosphere.id = atmosphere_data.atomsphere_id 
WHERE `atmosphere_data`.`datetime` =  '2015-05-03 23:02:30' 
AND `buoy_id` = 2



SELECT 
atmosphere.name as atmosphere_name, 
atmosphere_data.datetime as datetime, 
data
FROM `atmosphere_data` 
left join `buoy` on buoy.id = atmosphere_data.buoy_id 
left join `atmosphere` on atmosphere.id = atmosphere_data.atomsphere_id 
WHERE  `datetime` <=  '2015-05-04 01:54:55' 
AND `datetime` >=  '2015-01-04 01:54:55' 
AND `buoy_id` = 2