<!DOCTYPE html>
<html>

<head>
    <title>Consider</title>
    <script src="functions<?php include 'constants/version.php' ?>.js"></script>
    <?php
    include "serverfunctions.php";
    getPostIndex();
    ?>
    <link rel="stylesheet" href="styles<?php include 'constants/version.php' ?>.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
</head>

<body>
    <div id="container">
        <div class="hspacer"></div>
        <div id="content">
            <header>
                <h1 id="header-text">Consider</h1>
                <h2>A comprehensive list of things to think about.</h2>
            </header>
            <br />
            <input type="text" id="searchbar" placeholder="Search for a post" oninput="makeArticlesList(POSTS)" />
            <div id="articles"></div>
            <footer>
                <p>Want to be informed about new posts?</p>
                <form id="subscribe" method="post" action="actions/subscribe.php">
                    <input id="email" type="email" name="email" placeholder="your.email@example.com" />
                    <input type="submit" name="subscribe" class="subs-button" value="Subscribe" />
                    <input type="submit" name="subscribe" class="subs-button" value="Unsubscribe" />
                </form>
            </footer>
        </div>
        <div class="hspacer"></div>
    </div>
</body>

</html>

<script>
    makeArticlesList(POSTS);
</script>