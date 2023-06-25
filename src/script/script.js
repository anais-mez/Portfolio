// if (window.matchMedia("(min-width: 430px)").matches) {
document.addEventListener("scroll", function () {
    const anchoredCtaWeb = document.getElementById("header-change");
    if (window.pageYOffset > 4) {
        anchoredCtaWeb.style.minHeight = "70px";
        anchoredCtaWeb.classList.add("sticky");
    }
    if (window.pageYOffset < 3) {
        anchoredCtaWeb.classList.remove("sticky");
    }
});
// }

function setActive(element) {
    // Supprimer la classe active de tous les éléments du menu
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Ajouter la classe active à l'élément sélectionné
    element.classList.add('active');
}

if (window.matchMedia("(max-width: 430px)").matches) {
    const hamburgerButton = document.querySelector(".nav-toggler");
    const navigation = document.querySelector(".items");

    // Utiliser une fonction fléchée pour lier correctement `this` dans les gestionnaires d'événements
    const toggleNav = () => {
        hamburgerButton.classList.toggle("active");
        navigation.classList.toggle("active");
    };

    // Utiliser l'événement "touchstart" en plus de "click" pour une meilleure compatibilité tactile
    hamburgerButton.addEventListener("click", toggleNav);
    // hamburgerButton.addEventListener("touchstart", toggleNav);
}