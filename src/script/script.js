document.addEventListener("scroll", function () {
    const anchoredCtaWeb = document.getElementById("header-change");
    if (window.pageYOffset > 10) {
        anchoredCtaWeb.style.minHeight = "70px";
        anchoredCtaWeb.classList.add("sticky");
    }
    if (window.pageYOffset < 0) {
        anchoredCtaWeb.classList.remove("sticky");
    }
});

function setActive(element) {
    // Supprimer la classe active de tous les éléments du menu
    let menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => item.classList.remove('active'));

    // Ajouter la classe active à l'élément sélectionné
    element.classList.add('active');
}