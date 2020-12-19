function main() {
    let slides = document.querySelectorAll('.slide-single');
    let slider = [];
    let step = 0;
    let offset = 0;

    function init() {
        for (let i = 0; i < slides.length; i++) {
            slider[i] = slides[i].src;
            slides[i].remove();
        };
        draw();
        draw();
    }

    function draw() {
        let img = document.createElement('img');
        img.src = slider[step];
        img.classList.add('slide-single');
        img.style.left = offset * 512 + 'px';
        document.querySelector('#slide').appendChild(img);
        step++;
        if (step >= slider.length) {
            step = 0;
        }
        offset = 1;
    }

    function leftMove() {
        document.onclick = null;
        let slidesVisible = document.querySelectorAll('.slide-single');
        let offsetVisible = 0;
        for (let i = 0; i < slidesVisible.length; i++) {
            slidesVisible[i].style.left = offsetVisible * 512 - 512 + 'px';
            offsetVisible++;
        }
        setTimeout(function () {
            slidesVisible[0].remove();
            draw();
            document.onclick = leftMove;
        }, 1000);
    }

    init();
    document.onclick = leftMove;
}

export {
    main
};