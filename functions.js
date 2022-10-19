function makeArticlesList() {
    const searchbar = document.getElementById("searchbar");
    const articles = document.getElementById("articles");
    const search = searchbar.value.toLowerCase();
    searchbar.value = search;
    articles.innerHTML = "";
    POSTS.forEach((post) => {
        if (!search || post.title.toLowerCase().includes(search))
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
                        search,
                        "<span style='text-decoration: underline; filter: brightness(" +
                            (post.link ? "125" : "90") +
                            "%);'>" +
                            search +
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