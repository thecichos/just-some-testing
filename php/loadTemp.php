<?php
  $temp = $_POST["temp"];
  if ($temp = "inv") {
    $file = file_get_contents("inv.template");
    echo "$file";
  } else if ($temp = "user") {
    $file = file_get_contents("user.template");
    print_r($file);
  }
?>
