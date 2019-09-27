const pages = [
    {
        name: "Home",
        link: "index.html"
    },
    {
        name: "Dirty Mark",
        link: "DirtyMark.html"
    },
    {
        name: "Editor Example",
        link: "editor.html"
    },
    {
        name: "iPhone 11 Pro",
        link: "Iphone11Pro.html"
    },
    {
        name: "Magic Dust",
        link: "magic-dust.html"
    },
    {
        name: "Product 7",
        link: "product7.html"
    },
    {
        name: "Shoes",
        link: "Shoes.html"
    },
    {
        name: "Vacations",
        link: "vacations.html"
    },
    {
        name: "About Us",
        link: "aboutus.html"
    }
];
function drawNav() {
    const mainNav = document.getElementById('main-nav');
    if (mainNav !== null) {
        for (const page of pages) {
            const anchor = document.createElement('a');
            anchor.setAttribute('href', page.link);
            anchor.textContent = page.name;
            mainNav.appendChild(anchor);
        }
    }
}
