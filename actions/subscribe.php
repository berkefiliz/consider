<?php
    include "serverfunctions.php";
    $action = "fail";
    if(array_key_exists('email', $_POST) and array_key_exists('subscribe', $_POST)) {
        $email = $_POST['email'];
        $subscribe = $_POST['subscribe'];
        if ($email !== '' and $subscribe !== '') {
            insert($email, $_POST['subscribe']);
        }
    }
    function insert($email, $type) {
        $action = $type;
        $servername = "sql213.main-hosting.eu";
        $database = "u968648861_consider";
        $username = "u968648861_berkefiliz";
        $password = "M#+U1@ki05~b*h4P!H4u79;S";

        echo $type;
        
        $conn = mysqli_connect($servername, $username, $password, $database);
        
        $stmt = $conn -> prepare("INSERT INTO newsletter (email, action) VALUES (?, ?);");
        $stmt -> bind_param("ss", $email, $action);
        $stmt -> execute();
        $stmt -> close();
        $conn -> close();
    }
    
    header("Location:index.php?action=".$action);
?>