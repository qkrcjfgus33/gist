<?php	

	try{
			// 부이의 이름을 가져오는 php
			// 
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
			
			// DB로부터 부이를 가져온다.
			$name_Query = sprintf("SELECT name FROM buoy WHERE id='%d'", $bouy_id);
			
			$result = $conn->query($name_Query)
				or Die($name_Query);

			$data = array();

			if($result->num_rows > 0)
			{
				while($row = $result->fetch_assoc())
				{
					array_push($data, array(
						'name' => $row['name']
					));
				}
			}

			$output = json_encode($data);	
			echo $output;
			
			
				// DB 종	
				mysql_close($conn);

			} 
			catch(Exception $e)
			{
				// 로그 기록
				echo $e->getMessage();
			}


		
?>
	