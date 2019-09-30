window.addEventListener('DOMContentLoaded', drawNav);
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
function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}
function drawNav() {
    let firstNav = document.querySelector('nav:first-of-type');
    const firstHeader = document.querySelector('header:first-child');
    const mustAppend = (firstNav === null);
    if (firstNav === null) {
        console.log('firstNav: ', firstNav);
        firstNav = document.createElement('nav');
        console.log('had to create a new nav');
    }
    else {
        firstNav.innerHTML = '';
    }
    firstNav.className = 'main-nav';

    for (const page of pages) {
        const anchor = document.createElement('a');
        anchor.setAttribute('href', page.link);
        anchor.textContent = page.name;
        firstNav.appendChild(anchor);
    }
    if (mustAppend) {
        if (firstHeader !== null) {
            insertAfter(firstNav, firstHeader);
        }
        else {
            console.log('something went horribly wrong');
        }
    }

}

