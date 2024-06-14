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

document.addEventListener('scroll', function () {
    const rightBar = document.querySelector('.right-bar');
    const topBar = document.querySelector('.top-bar');
    const time = document.querySelector('.left-items .time');
    const location = document.querySelector('.left-items .location');
    const scrollPosition = window.scrollY; // Current scroll position from the top of the page

    // Apply transformation based on the scroll position
    rightBar.style.transform = `translateY(${scrollPosition * 0.5}px)`;

    // Fade out the right-bar as user scrolls down
    const fadeSpeed = 250; // Adjust the fade speed as needed
    const rightBarOpacity = Math.max(1 - scrollPosition / fadeSpeed, 0);
    const topbarborder = Math.max(1 - scrollPosition / 215, 0);
    if (rightBarOpacity < 0.25) {
        var overlay = document.getElementsByClassName('overlay')[0];
        if (overlay) {
            overlay.classList.toggle('active');
        }
    }

    rightBar.style.opacity = rightBarOpacity.toString();
    time.style.opacity = rightBarOpacity.toString();
    location.style.opacity = rightBarOpacity.toString();
    topBar.style.borderBottom = 'gray solid ' + (topbarborder * 0.15) + 'rem';

    // Show bottom bar when scrolled to 95% of the page
    const bottomBar = document.querySelector('.bottom-bar');
    const totalPageHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / totalPageHeight) * 100;

    if (scrollPercentage >= 96) {
        const opacity = (scrollPercentage - 95) / 5; // Calculate opacity from 0 to 1
        bottomBar.style.opacity = opacity.toString();
        bottomBar.style.visibility = 'visible';
    } else {
        bottomBar.style.opacity = '0';
        bottomBar.style.visibility = 'hidden';
    }
});
