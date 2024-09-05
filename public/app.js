
    const carousels = document.querySelector('.carousels');
    const images = [
        'https://m.media-amazon.com/images/I/71C-ztbXMCL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/71LRjWQb6SL._SX3000_.jpg',
        'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg'
    ];

    let currentIndex = 0;

    document.getElementById('leftBtn').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        carousels.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgb(227, 230, 230) 100%), url('${images[currentIndex]}')`;
    });

    document.getElementById('rightBtn').addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        carousels.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, rgb(227, 230, 230) 100%), url('${images[currentIndex]}')`;
    });
    document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.toggle').addEventListener('click', () => {
    document.querySelector('.left').style.display = 'block';
    document.querySelector('.black').style.display = 'block';
    document.querySelector('.black').style.display.zindex = 8;
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
    document.querySelector('.carousels').style.opacity = '0.5';
    document.querySelector('.container').style.opacity = '0.5';
    document.querySelector('nav').style.opacity = '0.5';
    document.querySelector('.list').style.opacity = '0.5';
    document.querySelector('.black').style.zIndex = '8';
    document.querySelector('.black').style.opacity = '0.8';
    document.querySelector('.x').style.visibility = 'visible';
});

document.querySelector('.x').addEventListener('click', () => {
    document.querySelector('.left').style.display = 'none';
    document.getElementsByTagName('body')[0].style.overflowY = 'auto';
    document.querySelector('.carousels').style.opacity = '1';
    document.querySelector('.container').style.opacity = '1';
    document.querySelector('nav').style.opacity = '1';
    document.querySelector('.list').style.opacity = '1';
    document.querySelector('.left').style.display = 'none';
    document.querySelector('.black').style.zIndex = '-2';
    document.querySelector('.black').style.display = 'none';
    document.querySelector('.x').style.visibility = 'hidden';
});

});
