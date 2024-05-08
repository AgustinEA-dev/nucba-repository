// Contenedor de productos
const productsContainer = document.querySelector(".products-container");
// Contenedor de productos del carrito
const productsCart = document.querySelector(".cart-container");
//El total en precio del carrito
const total = document.querySelector(".total");
// El contenedor de las categorías
const categoriesContainer = document.querySelector(".categories");
// Un htmlCollection de botones de todas las categorías (mostrar el dataset)
const categoriesList = document.querySelectorAll(".category");
// Botón de ver más
const showMoreBtn = document.querySelector(".btn-load");
// Botón de comprar
const buyBtn = document.querySelector(".btn-buy");
// Botón para abrir y cerrar carrito
//Burbuja de cantidad de productos en el carrito
const cartBubble = document.querySelector(".cart-bubble");
const cartBtn = document.querySelector(".cart-label");
// Botón para abrir y cerrar menú
const menuBtn = document.querySelector(".menu-label");
// Carrito
const cartMenu = document.querySelector(".cart");
//  Menú (Hamburguesa)
const barsMenu = document.querySelector(".navbar-list");
//  Overlay para tirar facha abajo del menú hamburguesa y el cart.
const overlay = document.querySelector(".overlay");
//  Modal de agregado al carrito.
const successModal = document.querySelector(".add-modal");
//  Modal de agregado al carrito.
const deleteBtn = document.querySelector(".btn-delete");

const cart = JSON.parse(localStorage.getItem(cart)) || []

const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de productos---------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para crear el html de un producto
 * IMPORTANTE: Hacer hincapie en los data-attributes del botón de agregar al carrito
 * @param {object} product  Objeto con la información del producto
 * @returns  {string}  html del producto
 */

const createProductTemplate = (produt) => {
    const { id, name, bid, user, userImg, cardImg } = produt
    return ` 
    <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">

            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>

            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>


            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="./assets/img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'>Add</button>
                </div>
            </div>
        </div>
    </div>`;
};

/**
 * Función para renderizar una lista de productos
 * @param {object[]} productList  Array de productos
 */

const renderProducts = (productList) => {
    productsContainer.innerHTML += productList
        .map(createProductTemplate
            .join('')
        )
}

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de "ver más"---------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para saber si el índice actual renderizado de la lista de productos productos es igual al límite de productos
 * @returns {boolean}  true si el índice actual de productos es igual al límite de productos (Total de subarrays en el array de productos divididos), false en caso contrario
 */

const isLastIndexOf = () => {
    return appState.currentProductsIndex === appState.productsLimit - 1
}

/**
 * Función para renderizar más productos cuando se apreta el botón de "ver más"
 * Si luego de renderizar se alcanza el límite de productos (Total de subarrays en el array de productos divididos), se oculta el botón
 */
const showMoreProducts = () => {
    appState.currentProductsIndex += 1;
    let { products, currentProductsIndex } = appState;
    renderProducts(products[currentProductsIndex]);
    if (isLastIndexOf()) {
        showMoreBtn.classList.add("hidden");
    }
};

/**
 *  Función para mostrar u ocultar el botón de "ver más" según corresponda
 */
const setShowMoreVisibility = () => {
    if (!appState.activeFilter) {
        showMoreBtn.classList.remove("hidden");
        return;
    }
    showMoreBtn.classList.add("hidden");
};

/*---------------------------------------------------------------------- */
/*------------------------ Lógica de filtros --------------------------- */
/*---------------------------------------------------------------------- */

/**
 * Función para cambiar el estado de los botones de categorías
 * NOTA: Se utiliza el operador spread para convertir el NodeList en un array y poder utilizar el método forEach
 * @param  {string} selectedCategory  Nombre de la categoría seleccionada
 */
const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoriesList]; // creamos un array con spread operator
    categories.forEach((categoryBtn) => {
        if (categoryBtn.dataset.category !== selectedCategory) {
            categoryBtn.classList.remove("active");
            return;
        }
        categoryBtn.classList.add("active");
    });
};

/**
 * Función para cambiar el estado del filtro activo.
 * Recibe el botón que se apretó y guarda el dataset.category en el estado de la app como nuevo filtro actual.
 * Llama a la función changeBtnActiveState para cambiar el estado de los botones de categorías.
 * Llama a la función setShowMoreVisibility para mostrar u ocultar el botón de "ver más" según corresponda.
 * @param {object} btn  Botón que se apretó
 */
const changeFilterState = (btn) => {
    appState.activeFilter = btn.dataset.category;
    changeBtnActiveState(appState.activeFilter);
    setShowMoreVisibility(appState.activeFilter);
};

/**
 * Función para aplicar el filtro cuando se apreta un botón de categoría
 * Si el botón que se apretó no es un botón de categoría o ya está activo, no hace nada.
 * Llama a la función changeFilterState para cambiar el estado del filtro activo.
 * Limpia el html de los productos renderizados.
 * Si hay un filtro activo, llama a la función renderFilteredProducts para renderizar los productos filtrados.
 * Si se apreta el boton de todas, al no tener un dataset.category ese botón, el filtro activo se vuelve undefined y se renderizan todos los productos.
 * @param {event} event  Evento de click (usamos destructuring para tomar el target del evento)
 */
const applyFilter = ({ target }) => {
    if (!isInactiveFilterBtn(target)) return;
    changeFilterState(target);
    productsContainer.innerHTML = "";
    if (appState.activeFilter) {
        renderFilteredProducts();
        appState.currentProductsIndex = 0;
        return;
    }
    renderProducts(appState.products[0]);
};





