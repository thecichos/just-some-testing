<?php
	$file = json_decode(file_get_contents("json/users.json"), true);
	echo "<script>";
	echo "var stuff = [";
	$n = "name";
	$o = "op";
	$t = count($file);
	for ($i=0; $i < count($file); $i++) {
		echo "[";
		echo "'" . $file[$i]["$n"] . "'" . ",";
		echo "'" . $file[$i]["$o"] . "'";
		if ($i === $t - 1) {
			echo "]";
		} else {
			echo "],";
		}
	}
	echo "]</script>";
 ?>
