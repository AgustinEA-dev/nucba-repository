const nav = document.querySelector(".nav");
let lastScrollY = window.scrollY;
const barsMenu = document.querySelector('#bars-icon')
const dropDownMenu = document.querySelector('.dropDown-menu')


window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        // console.log('going down')
        nav.classList.add("nav--hidden");
        dropDownMenu.classList.add("drop--hidden")
    } else {
        // console.log('going up')
        nav.classList.remove("nav--hidden");
        dropDownMenu.classList.remove("drop--hidden")
    }

    lastScrollY = window.scrollY;
});

barsMenu.addEventListener('click', () => {
    dropDownMenu.classList.toggle('dropwDown-visible')
})
