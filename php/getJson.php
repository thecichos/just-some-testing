<?php
	$file = json_decode(file_get_contents("json/stuff.json"), true);
	for ($i=0; $i < count($file); $i++) {
		echo "[";
		echo $file[$i]["name"] . "," . $file[$i]["op"];
		echo "]";
		echo "\n";
	}
 ?>
