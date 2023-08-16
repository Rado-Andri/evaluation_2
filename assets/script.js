document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function() {
        const searchTerm = searchInput.value;
        if (searchTerm) {
            // Vous pouvez ajouter ici le code pour effectuer la recherche
            console.log("Recherche : " + searchTerm);
        }
    });

    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchButton.click();
        }
    });
});
