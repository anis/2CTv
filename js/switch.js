// Toggle the activation value
localStorage.setItem(
    'is2CTvActive',
    localStorage.getItem('is2CTvActive') !== 'true'
);

// Refresh the page
document.location.replace(document.location);