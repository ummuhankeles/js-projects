var newQuote = document.querySelector('#new-quote');
var authorText = document.querySelector('#author-text');
var author = document.querySelector('#author');
var btnTwitter = document.querySelector('#btn-twitter');

newQuote.addEventListener('click', () => {
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result);
        authorText.innerHTML = result.content;
        author.innerHTML = result.author;
    })
})

btnTwitter.addEventListener('click', () => {
    let tweet = `https://twitter.com/intent/tweet?text=${authorText.innerHTML}--${author.innerHTML}`;
    window.open(tweet, "_blank");
})