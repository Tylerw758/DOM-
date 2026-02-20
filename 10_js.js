// Show/Hide Filter Menu
function showFilter() {
    const filterForm = document.getElementById("filterContent");
    const newForm = document.getElementById("newContent");

    if (filterForm.style.display === "none") {
        filterForm.style.display = "block";
    } else {
        filterForm.style.display = "none";
    }

    // Hide Add Form when filter is shown
    newForm.style.display = "none";
}


// Show/Hide Add Article Form
function showAddNew() {
    const newForm = document.getElementById("newContent");
    const filterForm = document.getElementById("filterContent");

    if (newForm.style.display === "none" || newForm.style.display === "") {
        newForm.style.display = "flex";
    } else {
        newForm.style.display = "none";
    }

    // Hide filter menu when add form is shown
    filterForm.style.display = "none";
}


// Filter Articles
function filterArticles() {

    const showOpinion = document.getElementById("opinionCheckbox").checked;
    const showRecipe = document.getElementById("recipeCheckbox").checked;
    const showUpdate = document.getElementById("updateCheckbox").checked;

    const articles = document.querySelectorAll("#articleList article");

    articles.forEach(article => {

        if (article.classList.contains("opinion")) {
            article.style.display = showOpinion ? "block" : "none";
        }

        if (article.classList.contains("recipe")) {
            article.style.display = showRecipe ? "block" : "none";
        }

        if (article.classList.contains("update")) {
            article.style.display = showUpdate ? "block" : "none";
        }
    });
}


// Add New Article
function addNewArticle() {

    const title = document.getElementById("inputHeader").value;
    const text = document.getElementById("inputArticle").value;

    const opinionRadio = document.getElementById("opinionRadio");
    const recipeRadio = document.getElementById("recipeRadio");
    const lifeRadio = document.getElementById("lifeRadio");

    let type = "";
    let typeLabel = "";

    if (opinionRadio.checked) {
        type = "opinion";
        typeLabel = "Opinion";
    }
    else if (recipeRadio.checked) {
        type = "recipe";
        typeLabel = "Recipe";
    }
    else if (lifeRadio.checked) {
        type = "update";
        typeLabel = "Update";
    }

    // Validation
    if (title === "" || text === "" || type === "") {
        alert("Please complete all fields.");
        return;
    }

    // Create article
    const article = document.createElement("article");
    article.classList.add(type);

    // Marker
    const marker = document.createElement("span");
    marker.classList.add("marker");
    marker.textContent = typeLabel;

    // Title
    const h2 = document.createElement("h2");
    h2.textContent = title;

    // Paragraph
    const p = document.createElement("p");
    p.textContent = text;

    // Read more link
    const linkPara = document.createElement("p");
    const link = document.createElement("a");
    link.href = "moreDetails.html";
    link.textContent = "Read more...";
    linkPara.appendChild(link);

    // Append everything
    article.appendChild(marker);
    article.appendChild(h2);
    article.appendChild(p);
    article.appendChild(linkPara);

    document.getElementById("articleList").appendChild(article);

    // Clear form
    document.getElementById("inputHeader").value = "";
    document.getElementById("inputArticle").value = "";
    opinionRadio.checked = false;
    recipeRadio.checked = false;
    lifeRadio.checked = false;

    // Hide form after adding
    document.getElementById("newContent").style.display = "none";
}
