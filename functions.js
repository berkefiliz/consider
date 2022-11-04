OLD = [
    {
        title: "We are all livestock animals for trees",
        tab: "",
        date: "2022/--/--",
        link: null,
    },
    {
        title: "Moon landing was an alien invasion",
        tab: "",
        date: "2022/11/--",
        link: null,
    },
    {
        title: "Showers are blatantly lying to our faces",
        tab: "Hoax showers",
        date: "2022/10/24",
        link: "0003_hoax_showers.html",
    },
    {
        title: "Socks may be interdimensional overlords",
        tab: "Sock overlords",
        date: "2022/10/23",
        link: "0002_sock_overlords.html",
    },
    {
        title: "Vegan tomatoes contain no animal products",
        tab: "Vegan tomatoes",
        date: "2022/10/14",
        link: "0001_vegan_tomatoes.html",
    },
];

function prepareArticle(post) {
    post.header = post.title.replace(" ", "_").toLowerCase();
    post.link = post.uid + "_" + post.header + ".php";
    post.active = post.active == "1";
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
}
