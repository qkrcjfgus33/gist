<?php

		try
		{
			// 부이의 속성데이터를 가져오는 php
			// GET방식으로 얻어온 부이 아이디
			$bouy_id = $_GET["bouy_id"];
			

			// DB 로그인 정보
			$servername = "localhost:3306";
			$username = "gist";
			$password = "qF5asL7umdsaPqXv";
			$dbname = "gist";

					
			
			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			$conn->query("set names utf8");
			
			// Check connection
			if ($conn->connect_error) {
				echo "SQL Connect Failed";
			    exit();
			}

			
			// 그 부이의 수은, 염분, pH,전압에 해당하는 최소 최대 값을 가져온다.	
			$limit_Query = sprintf("SELECT * FROM atmosphere_limit WHERE buoy_id='%d'", $bouy_id);
		
			
			
			$result = $conn->query($limit_Query)
				or Die($limit_Query);

			$data = array();

		
			if($result->num_rows > 0)
			{
				
				while($row = $result->fetch_assoc())
				{
					array_push($data, array(
						'atomsphere_id' => $row['atomsphere_id'],
						'buoy_id'		=> $row['buoy_id'],
						'max'			=> $row['max'],
						'min'			=> $row['min']
					));
				}

			}
			

			$output = json_encode($data);	
			echo $output;
			
			// DB 종	
			//mysql_close($conn);
		} 
		catch(Exception $e)
		{
			// 로그 기록
				echo $e->getMessage();
		}

			
?>