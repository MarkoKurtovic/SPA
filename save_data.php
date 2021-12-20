<?php 

require 'bootstrap.php';
$json = file_get_contents('php://input');

$data = json_decode($json);

var_dump($data);
echo $query->save($data);

?>