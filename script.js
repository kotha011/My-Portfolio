const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('portfolio-search');

// Function to perform the search
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (query === "") return;

    const elements = document.querySelectorAll('h2, h3, p, span');
    let found = false;

    for (let el of elements) {
        if (el.textContent.toLowerCase().includes(query)) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Visual feedback
            el.style.transition = "background 0.5s";
            el.style.backgroundColor = "#ffb3c1"; 
            setTimeout(() => el.style.backgroundColor = "transparent", 2000);
            
            found = true;
            break; 
        }
    }

    if (!found) alert("No matches found for: " + query);
}

// 1. Trigger search on Button Click
searchBtn.addEventListener('click', performSearch);

// 2. Trigger search on "Enter" Key Press
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});