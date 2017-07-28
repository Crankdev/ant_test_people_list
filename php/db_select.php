<?php
header('Content-Type: application/json');
include 'db.php';
$db = new db();
$result = $db->get_data();
    if ($result->num_rows > 0) {
        echo '[';
        // output data of each row
        $i = 0;
        while ($row = $result->fetch_assoc()) {
            if ($i != 0) echo ',';
            echo json_encode($row);
            $i++;
        }
        echo ']';
    }
