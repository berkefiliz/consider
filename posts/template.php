<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../styles.css" />
        <title id="tabtitle"></title>
        <script src="../functions.js"></script>
    </head>
    <body>
        <div id="container">
            <div class="hspacer"></div>
            <div id="content">
                <header id="header"></header>
                <article>
                    <p>
                        Hi! You are not supposed to be here but greetings
                        regardless!
                    </p>
                    <blockquote>
                        "I can quote stuff wooooo!"
                        <br />
                        ~ Berke Filiz
                    </blockquote>
                    <p>I can even make lists if I really want to.</p>
                    <ul>
                        <li>This is a list item</li>
                        <li>This is another one</li>
                        <li>Look at me go!</li>
                    </ul>
                    <p>
                        <a href="/index.html">< Get out</a>
                    </p>
                </article>
            </div>
            <div class="hspacer"></div>
        </div>
    </body>
</html>

<?php
include "../serverfunctions.php";
echo "<script> preparePost(" . getPost("0000") . ") </script>";
?>