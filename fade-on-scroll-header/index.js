const header = document.querySelector('header');

let oldScrollPosition = 0;

// false = scrolling down
// true  = scrolling up
let isScrollingUp = false; 

let isHeaderVisible = true;



window.addEventListener('scroll', event => {
    isScrollingUp = oldScrollPosition > window.scrollY;
    oldScrollPosition = window.scrollY;
    
    if (!isScrollingUp && window.scrollY > 200 && isHeaderVisible) {
        header.classList.add('invisible');

        isHeaderVisible = false;
    }

    if (isScrollingUp && !isHeaderVisible) {
        header.classList.remove('invisible');

        isHeaderVisible = true;
    }
});