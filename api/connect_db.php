<?php
//database connection
try {
    $conn = new mysqli("localhost","root","","streamify");
    return $conn;
  }
catch (Exception $e){
    echo $e->getMessage();
  }
?>