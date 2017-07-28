<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
header('Content-Type: application/json');
if(!$request) echo json_encode ('null');
else {
    include 'db.php';
    $db = new db();
    echo $db->insert_data($request->firstname, $request->lastname, $request->age);
}
