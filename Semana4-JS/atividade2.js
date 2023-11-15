const mainNews = document.getElementById("main-news");
alert(mainNews.innerHTML);

const headlines = document.getElementsByTagName("h1");
for (const headline of headlines) {
    headline.style.fontWeight = "bold";
}

const newsParagraphs = document.getElementsByClassName("news-paragraph");
for (const paragraph of newsParagraphs) {
    paragraph.innerHTML = "Leia a notícia completa";
}

const commentSection = document.getElementById("latest-updates");
const newComment = document.createElement("p");
newComment.innerHTML = "Leave your comment";
commentSection.appendChild(newComment);

const latestUpdates = document.getElementById("latest-updates");
const lastItem = latestUpdates.lastElementChild;
latestUpdates.removeChild(lastItem);

const toggleButton = document.getElementById("toggle-theme");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});
