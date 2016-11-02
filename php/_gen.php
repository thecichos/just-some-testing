<?php
	$name = $_POST["name"];
	$op = $_POST["op"];
	$file = json_decode(file_get_contents("json/stuff.json"), true);
	if ($file === NULL) {
		$file = json_decode(file_get_contents("json/stuff.json"), true);
	}
	$test = array();
	for ($i=0; $i < count($file); $i++) {
		if ($file[$i]["name"] === $name) {
			array_push($test,FALSE);
		} else if ($file[$i]["name"] === "") {
			array_push($test,FALSE);
		} else {
			array_push($test, TRUE)
		}
	}
	if (in_array(FALSE, $test)) {
		file_put_contents("json/stuff.json", json_encode($file));
		die("failure");
	} else {
		$temp = array("name" => "$name", "op" => "$op");
		array_push($file, $temp);
		file_put_contents("json/stuff.json", json_encode($file));
		echo "done";
	}
 ?>
