function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.querySelector('.time').textContent = hours + ':' + minutes;
}
setInterval(updateTime, 1000); // Update the time every second

function toggleMenu() {
    var menu = document.querySelector('.menu-icon');
    menu.classList.toggle('active');
    
    var menuitems = document.querySelector('.menu-items');
    menuitems.classList.toggle('active'); // Toggle the 'active' class for menu items

    var overlay = document.querySelector('.overlay'); //toggles menu overlay when screen size is too small
    overlay.classList.toggle('active');
}

updateTime(); // Initial call to display the time immediately

document.addEventListener('scroll', function() {
    const rightBar = document.querySelector('.right-bar');
    const scrollPosition = window.scrollY; // Current scroll position from the top of the page
    
    // Apply transformation based on the scroll position
    // Example: Move right-bar up as user scrolls down
    rightBar.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    
    // Optional: Fade out the right-bar as user scrolls down
    rightBar.style.opacity = Math.max(1 - scrollPosition / 250, 0); // Adjust the divisor to control the fade speed
});