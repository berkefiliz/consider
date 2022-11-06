<?php
    include "../serverfunctions.php";
    $action = "fail";
    if(array_key_exists('email', $_POST) and array_key_exists('subscribe', $_POST)) {
        $email = $_POST['email'];
        $subscribe = $_POST['subscribe'];
        if ($email !== '' and $subscribe !== '') {
            $action="success";
            insertSubs($email, $_POST['subscribe']);
        }
    }
    function insertSubs($email, $type) {
        $action = $type;
        global $servername, $username, $password, $database;

        echo $type;
        
        $conn = mysqli_connect($servername, $username, $password, $database);
        
        $stmt = $conn -> prepare("INSERT INTO newsletter (email, action) VALUES (?, ?);");
        $stmt -> bind_param("ss", $email, $action);
        $stmt -> execute();
        $stmt -> close();
        $conn -> close();
    }
    
    header("Location:../index.php?action=".$action);
