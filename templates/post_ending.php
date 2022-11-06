<h2>Leave a thought</h2>
<div id="comments">
    <form id="comment" method="post" action="../actions/comment.php">
        <input id="comment-post" type="hidden" name="post" required/>
        <input id="comment-author" type="text" name="author" maxlength="20" placeholder="Anonymous" />
        <input id="comment-content" type="text" name="content" maxlength="500" placeholder="I think this was a nice post." required />
        <input type="submit" name="submit" class="subs-button" value="Think" />
    </form>
</div>
<div style="height: 50px"></div>
<h2>What others thought about</h2>
<div id="comment-section"></div>

<script>
    if (window.location.href.endsWith("?action=success")) {
        document.getElementById('comments').scrollIntoView();
    }
</script>

</div>
<div class="hspacer"></div>
</div>

</body>

</html>