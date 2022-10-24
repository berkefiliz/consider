POSTS = [
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

function makeArticlesList() {
    const searchbar = document.getElementById("searchbar");
    const articles = document.getElementById("articles");
    const search = searchbar.value.toLowerCase();
    searchbar.value = search;
    articles.innerHTML = "";
    POSTS.forEach((post) => {
        if (!search || post.title.toLowerCase().includes(search.trim()))
            articles.innerHTML += `
        <div class="article">
            <div class="article-date" ${
                post.link ? "" : "style='color: lightgray'"
            }>
                ${post.date}
            </div>
            <div class="article-name">
                <a ${post.link ? "href=posts/" + post.link : ""} ${
                post.link ? "" : "style='color: lightgray'"
            }>
                    ${post.title.replaceAll(
                        search.trim(),
                        "<span style='text-decoration: underline; filter: brightness(" +
                            (post.link ? "125" : "90") +
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

function preparePost(i) {
    assetReload();
    let post = POSTS[POSTS.length - i];
    let header = document.getElementById("header");
    header.innerHTML = `
        <a href="/index.html" id="header-text">< Get out</a>
        <h2 id="subheader"></h2>
    `;
    let subheader = document.getElementById("subheader");
    let tabtitle = document.getElementById("tabtitle");
    subheader.innerHTML = post.title;
    tabtitle.innerHTML = "Consider: " + post.tab;
}

function assetReload() {
    var links = document.getElementsByTagName("link");
    for (var cl in links) {
        var link = links[cl];
        if (link.rel === "stylesheet") {
            link.href += "?t=" + new Date().getDate();
        }
    }
    var scripts = document.getElementsByTagName("script");
    for (var cl in scripts) {
        var script = scripts[cl];
        if (script.src && script.src.endsWith("functions.js")) {
            script.src += "?t=" + new Date().getDate() + new Date().getMinutes();
        }
    }
}
