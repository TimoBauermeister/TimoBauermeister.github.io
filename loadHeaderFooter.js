function loadHeader() {
    const headerElement = document.createElement('header');
    const baseUrl = window.location.origin + '/TimoBauermeister.github.io';

    headerElement.innerHTML = `
        <a href="${baseUrl}" class="logo">WikiHazia</a>
        <div class="burger-menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav class="menu">
            <ul>
                <li><a href="${baseUrl}/heirs-of-the-new-world/home.html">Die Erben der neuen Welt</a></li>
                <ul>
                    <li><a href="${baseUrl}/heirs-of-the-new-world/adepten.html">Adepten</a></li>
                    <li><a href="${baseUrl}/heirs-of-the-new-world/heiligtum.html">Heiligtum</a></li>
                    <li><a href="${baseUrl}/heirs-of-the-new-world/hohe-priester.html">Hohe Priester</a></li>
                    <li><a href="${baseUrl}/heirs-of-the-new-world/sektenfuehrer.html">Sektenführer</a></li>
                </ul>
            </ul>
        </nav>
    `;

    const burgerMenu = headerElement.querySelector('.burger-menu');
    const menu = headerElement.querySelector('.menu');
    burgerMenu.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    document.body.insertAdjacentElement('afterbegin', headerElement);
}

function loadFooter() {
    const footerElement = document.createElement('footer');
    footerElement.innerHTML = `
      <p>&copy; 2024 WikiHazia. All rights reserved.</p>
    `;
    document.body.insertAdjacentElement('beforeend', footerElement);
}

loadHeader();
loadFooter();
