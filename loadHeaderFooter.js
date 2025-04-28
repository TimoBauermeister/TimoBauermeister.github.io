function loadHeader() {
    const headerElement = document.createElement('header');
    let baseUrl = window.location.origin;
    if (!baseUrl.toLowerCase().includes('/timobauermeister.github.io')) {
        baseUrl += '/timobauermeister.github.io';
    }

    headerElement.innerHTML = `
        <a href="${baseUrl}" class="logo">Wiki<b>Hazia</b></a>
        <div class="burger-menu">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <nav class="menu">
            <ul>
                <li>
                    <a href="${baseUrl}/heirs-of-the-new-world/home.html">Die Erben der neuen Welt</a>
                </li>
                <li>
                    <a href="${baseUrl}/heirs-of-the-new-world/adepten.html">Adepten</a>
                </li>
                <li>
                    <a href="${baseUrl}/heirs-of-the-new-world/kultstaette.html">Kultstätte</a>
                </li>
                <li>
                    <a href="${baseUrl}/heirs-of-the-new-world/hohe-priester.html">Hohe Priester</a>
                </li>
                <li>
                    <a href="${baseUrl}/heirs-of-the-new-world/kultfuehrer.html">Kultführer</a>
                </li>
                <li>
                    <a href="${baseUrl}/heirs-of-the-new-world/elarion.html">Akademie</a>
                </li>
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
    let baseUrl = window.location.origin;
    if (!baseUrl.toLowerCase().includes('/timobauermeister.github.io')) {
        baseUrl += '/timobauermeister.github.io';
    }

    const footerElement = document.createElement('footer');
    footerElement.innerHTML = `
      <p><a href="${baseUrl}/heirs-of-the-new-world/private.html" class="hidden-a">&copy;</a> 2025 WikiHazia. All rights reserved.</p>
    `;
    document.body.insertAdjacentElement('beforeend', footerElement);
}

document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});


loadHeader();
loadFooter();