const buttons = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', e => {
    const id = e.target.dataset.id;

    if (id) {
        //remove active class from other buttons not selected
        buttons.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
    }
});