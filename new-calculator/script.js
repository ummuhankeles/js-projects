const changeTheme = document.querySelector('.calculator__theme-btn');
const icon = document.querySelector('#icon');

changeTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    if(document.body.classList.contains('light-theme')) {
        icon.classList = "fa-solid fa-moon fa-xl";
    } else {
        icon.classList = "fa-solid fa-sun fa-xl"
    }
})