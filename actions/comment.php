<?php
    include "../serverfunctions.php";
    $action = "fail";
    if(array_key_exists('post', $_POST) and array_key_exists('content', $_POST)) {
        $post = $_POST['post'];
        $author = $_POST['author'];
        $content = $_POST['content'];
        if ($post !== '' and $content !== '') {
            $action="success";
            insertComment($post, $author, $content);
        }
    }
    function insertComment($post, $author, $content) {
        global $servername, $username, $password, $database;

        $conn = mysqli_connect($servername, $username, $password, $database);
        
        $stmt = $conn -> prepare("INSERT INTO comments (post, author, content) VALUES (?, ?, ?);");
        $stmt -> bind_param("sss", $post, $author, $content);
        $stmt -> execute();
        $stmt -> close();
        $conn -> close();
    }
    
    header("Location: " . $_SERVER["HTTP_REFERER"] . "?action=" . $action);
?>