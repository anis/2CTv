// If the extension is not activated or already ran, just do nothing
if (localStorage.getItem('is2CTvActive') !== 'true') {
    throw 'The extension 2CTv is not activated for current page';
}

// Set up a default background, if none has been set
if (window.getComputedStyle(document.body).getPropertyValue("background-color") === "rgba(0, 0, 0, 0)") {
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}