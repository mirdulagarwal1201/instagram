window.addEventListener('scroll', event => {    
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    document.documentElement.style.setProperty('--article-read-size', `${scrolled}%`);
});
