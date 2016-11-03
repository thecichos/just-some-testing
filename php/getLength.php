<?php
  $file = json_decode(file_get_contents("json/items.json", TRUE));
  echo "" . count($file) . "";
 ?>
