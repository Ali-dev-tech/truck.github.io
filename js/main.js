/*PAGE TRANSITION CODE*/
window.onload = () => {
    const transitionEl = document.querySelector('.transition')
    const anchors = document.querySelectorAll('nav a')
    setTimeout(() => {
        transitionEl.classList.remove('is-active')
    }, 500);

    for(let i = 0; i<anchors.length; i++){
        const anchor = anchors[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();

            let target = e.target.href;

            transitionEl.classList.add('is-active');

            setTimeout(() => {
                window.location.href = target;
            }, 500);
        })
    }
}


/*NAVBAR CODE*/
const menu = document.querySelector('.menu-list')
const burger = document.querySelector('.mobile-menu')

burger.addEventListener('click',function(){
    menu.classList.toggle('visible')
})