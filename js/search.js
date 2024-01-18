// Get the input element and list
const input = document.getElementById('searchInput');
const list = document.getElementById('list');
const items = list.getElementsByTagName('li');

// Add event listener for input changes 
input.addEventListener('input', function() {
    const searchText = input.value.toLowerCase(); // Get the typed text

    // Loop through all list items, hide those that don't match the search query
    Array.from(items).forEach(function(item) {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchText)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});