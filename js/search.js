const searchInput =
document.getElementById("searchInput");

const searchResults =
document.getElementById("searchResults");

let searchData = [];

fetch("search.json")
.then(response => response.json())
.then(data => {

searchData = data;

});

function renderResults(results){

searchResults.innerHTML = "";

if(results.length === 0){

searchResults.innerHTML = `

<div class="search-result">

<h3>No results found</h3>

<p>

Try a different keyword.

</p>

</div>

`;

return;

}

results.forEach(item => {

const article = document.createElement("div");

article.className = "search-result";

article.innerHTML = `

<a href="${item.url}">

<h3>${item.title}</h3>

<p>${item.description}</p>

</a>

`;

searchResults.appendChild(article);

});

}

searchInput.addEventListener("input", e => {

const term =
e.target.value.toLowerCase().trim();

if(term.length === 0){

searchResults.innerHTML = "";

return;

}

const filtered =
searchData.filter(item =>

item.title.toLowerCase().includes(term)

||

item.description.toLowerCase().includes(term)

||

item.keywords.toLowerCase().includes(term)

);

renderResults(filtered);

});
