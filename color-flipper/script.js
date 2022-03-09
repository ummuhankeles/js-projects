var colorChangeBtn = document.querySelector('.btn');
var colorCode = document.querySelector('.colorInfo');

colorChangeBtn.addEventListener('click', () => {
    const numbersAndLetters = "0123456789ABCDEF".split("");
    let color = "#";

    for(var i=0; i<6; i++) {
        color += numbersAndLetters[Math.floor(Math.random() * numbersAndLetters.length)];
    }

    colorCode.innerHTML = color;
    document.body.style.backgroundColor = color;
    
})