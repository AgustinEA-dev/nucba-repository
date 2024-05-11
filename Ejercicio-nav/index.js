const barsMenu = document.querySelector('#bars-icon')
const dropDownMenu = document.querySelector('.dropDown-menu')

barsMenu.addEventListener('click', () => {
    dropDownMenu.classList.toggle('dropwDown-menu-visibile')
})