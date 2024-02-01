document.addEventListener("DOMContentLoaded", function () {
    var textElement = document.querySelector('.text');
    var photTextElement = document.querySelector('.phot_text');

    function handleScroll() {
        var scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > textElement.offsetTop + textElement.offsetHeight / 2) {
            textElement.classList.add('active');
        }

        if (scrollPosition > photTextElement.offsetTop + photTextElement.offsetHeight / 2) {
            photTextElement.classList.add('active');
        }
    }

    window.addEventListener('scroll', handleScroll);
});