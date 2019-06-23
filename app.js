let accordions = document.querySelectorAll('button.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function () {
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('show');
    });
});