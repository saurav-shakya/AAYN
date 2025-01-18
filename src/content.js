// content.js

// Function to blur video thumbnails on the YouTube homepage
function blurThumbnails() {
    const thumbnails = document.querySelectorAll('ytd-thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.style.filter = 'blur(5px)';
    });
}

// Function to remove blur on hover
function removeBlurOnHover() {
    const thumbnails = document.querySelectorAll('ytd-thumbnail');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('mouseenter', () => {
            thumbnail.style.filter = 'none';
        });
        thumbnail.addEventListener('mouseleave', () => {
            thumbnail.style.filter = 'blur(5px)';
        });
    });
}

// Function to handle search results
function showFullResultsOnSearch() {
    const searchResults = document.querySelectorAll('ytd-video-renderer');
    searchResults.forEach(result => {
        result.style.filter = 'none'; // Show full results
    });
}

// Observe changes in the DOM to apply the functions
const observer = new MutationObserver(() => {
    if (window.location.href.includes('youtube.com')) {
        blurThumbnails();
        removeBlurOnHover();
    }
    if (window.location.href.includes('search')) {
        showFullResultsOnSearch();
    }
});

// Start observing the body for changes
observer.observe(document.body, { childList: true, subtree: true });