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






document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the new location value from the input field
    var newLocation = document.getElementById('newLocation').value;

    // Update the iframe source with the new location
    var mapIframe = document.getElementById('mapIframe');
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.13368452557!2d" + longitude + "!3d" + latitude + "&q=" + encodeURIComponent(newLocation);
});