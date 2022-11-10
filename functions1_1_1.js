function prepareArticle(post) {
    post.header = post.title.replace(" ", "_").toLowerCase();
    post.link = post.uid + "_" + post.header + ".php";
    post.active = post.active == "1";
    post.ncomments = "0";
    if (typeof NCOMMENTS !== "undefined") {
        row = NCOMMENTS.filter(function (p) {
            return p.post == post.uid;
        });
        console.log(row)
        if (row.length > 0) {
            post.ncomments = row[0].ncomments;
        }
    }
    return post;
}

function prepareArticlesList(posts) {
    procposts = {};
    posts.forEach((post) => {
        post = prepareArticle(post);
    });
    return posts;
}

function makeArticlesList(posts) {
    const searchbar = document.getElementById("searchbar");
    const articles = document.getElementById("articles");
    const search = searchbar.value.toLowerCase();
    searchbar.value = search;
    articles.innerHTML = "";
    posts
        .sort((a, b) => (a.date < b.date ? 1 : -1))
        .sort((a, b) => (a.active > b.active ? 1 : -1))
        .forEach((post) => {
            if (!search || post.name.toLowerCase().includes(search.trim()))
                articles.innerHTML += `
        <div class="article">
            <div class="article-date" ${
                post.active ? "" : "style='color: lightgray'"
            }>
                ${post.date}
            </div>
            <div class="article-views" ${
                post.active ? "" : "style='visibility: hidden'"
            }>
                <i class='fa fa-eye'></i>
                <p>${post.views}</p>
            </div>
            <div class="article-comments" ${
                post.active ? "" : "style='visibility: hidden'"
            }>
                <i class='fa fa-comment'></i>
                <p>${post.ncomments}</p>
            </div>
            <div class="article-name">
                <a ${post.active ? "href=posts/" + post.link : ""} ${
                    post.active ? "" : "style='color: lightgray'"
                }>
                    ${post.name.replaceAll(
                        search.trim(),
                        "<span style='text-decoration: underline; filter: brightness(" +
                            (post.active ? "125" : "90") +
                            "%);'>" +
                            search.trim() +
                            "</span>"
                    )}
                </a>
            </div>
        </div>
        `;
        });
    if (articles.innerHTML == "") {
        articles.innerHTML = `
            <div class="article">
                <div class="article-date" style="color: lightgray">
                    ----/--/--
                </div>
                <div class="article-name">
                    <a style="color: lightgray">
                        No posts found with the current query :(
                    </a>
                </div>
            </div>
        `;
    }
}

function preparePost(post) {
    if (!post) {
        return;
    }
    post = prepareArticle(post);
    let header = document.getElementById("header");
    header.innerHTML = `
        <a href="/index.php" id="header-text">< Get out</a>
        <h2 id="subheader"></h2>
    `;
    let subheader = document.getElementById("subheader");
    let tabtitle = document.getElementById("tabtitle");
    subheader.innerHTML = post.name;
    tabtitle.innerHTML = "Consider: " + post.title;
    let commentPost = document.getElementById("comment-post");
    commentPost.value = post.uid;
    let commentContent = document.getElementById("comment-content");
    commentContent.placeholder = post.csplaceholder;
}

function makeCommentSection(comments) {
    let innerHTML = "";
    comments.forEach((c) => {
        innerHTML += `
            <div class="cs-holder">
                <div class="cs-author">${
                    c.author ? c.author : "Anonymous"
                }</div>
                <div class="cs-content">${c.content}</div>
            </div>
        `;
    });
    if (innerHTML == "") {
        innerHTML = `
            <div class="cs-holder">
                <div style="color: lightgray" class="cs-content">Nothing yet. Be the first one to consider!</div>
            </div>
        `;
    }
    document.getElementById("comment-section").innerHTML = innerHTML;
}
