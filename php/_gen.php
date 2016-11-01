<?php
	$name = $_POST["name"];
	$op = $_POST["op"];
	$file = json_decode(file_get_contents("json/stuff.json"), true);

	$cool = $file;
	$temp = array("name" => "$name", "op" => "$op");

	array_push($cool, $temp);

	file_put_contents("json/stuff.json", json_encode($cool));

	// echo "$file";
 ?>
