// Add any JavaScript you might need for interactivity here
// For now, this script will simply scroll smoothly to the 'Learn More' section when the button is clicked

document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#learn-more').scrollIntoView({ behavior: 'smooth' });
});
