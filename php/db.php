<?php
class db{
    private $host = 'localhost';
    private $password = '********';
    private $user = 'root';

    function create_table($table = 'ang'){
         $mysqli = new mysqli($this->host, $this->user, $this->password, $table);
         $query = "
         CREATE TABLE people (
             firstname VARCHAR(255),
             lastname VARCHAR(255),
             age INT
            );
         ";
        $result =  $mysqli->query($query) or die("Error in mySql statement!");
        $mysqli->close();
        return $result;
    }

    function get_data($table = 'ang') {
        $mysqli = new mysqli($this->host, $this->user, $this->password, $table);
        $query = "SELECT * FROM people;";
        $result =  $mysqli->query($query) or die("Error in mySql statement!");
        $mysqli->close();
        return $result;
    }

    function get_one($id, $table = 'ang') {
        $mysqli = new mysqli($this->host, $this->user, $this->password, $table);
        $query = "SELECT * FROM people WHERE id=" . $id;
        $result =  $mysqli->query($query) or die("Error in mySql statement!");
        $mysqli->close();
        return $result;
    }

    function insert_data($firstname, $lastname, $age, $table = 'ang') {
        $mysqli = new mysqli($this->host, $this->user, $this->password, $table);
        $query = "
        INSERT INTO people (firstname, lastname, age)
        VALUES ('".$firstname."', '".$lastname."', ".$age.");
        ";
        $result =  $mysqli->query($query) or die("null");
        $mysqli->close();
        if ($result=='null') return json_encode('null');
        else return json_encode('ok');
    }

    function update_data($id, $firstname, $lastname, $age, $table = 'ang'){
        $mysqli = new mysqli($this->host, $this->user, $this->password, $table);
        $query = "UPDATE people SET firstname='".$firstname."', lastname='".$lastname."', age=".$age."   WHERE id=" . $id;
        $result =  $mysqli->query($query) or die("null");
        $mysqli->close();
        if ($result=='null') return json_encode('null');
        else return json_encode('ok');
    }

    function delete_date($id, $table = 'ang'){
        $mysqli = new mysqli($this->host, $this->user, $this->password, $table);
        $query = "
            DELETE FROM people WHERE id='".$id."';
            ";
        $result =  $mysqli->query($query) or die("null");
        $mysqli->close();
        if ($result=='null') return json_encode('null');
        else return json_encode('ok');
    }
}