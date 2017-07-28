<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-Type: application/json');
include 'db.php';
$db = new db();
if(!$request) { echo '{"firstname":"null","lastname":"null","age":"0","id":"0"}'; }
else {
    $result = $db->get_one($request);
    //var_dump($result->fetch_assoc());
    echo json_encode($result->fetch_assoc());
}