/**
* TEMPLATE 2 JAVASCRIPT
*/

// Change navbar background color on scroll
window.onscroll = function() {
    const navbar = document.querySelector('.navbar2')

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

// Event listener for clicks on like buttons
const likeButtons = document.querySelectorAll('.like2')

likeButtons.forEach(like => like.addEventListener('click', event => {
    event.target.classList.toggle('like2-active')
}))