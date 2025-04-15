const pages = [
    'home.html',
    'adepten.html',
    'kultstaette.html',
    'kultfuehrer.html',
    'hohe-priester.html',
    'akademie.html'
];

const fetchAndExtractContent = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Failed to fetch ${url}`);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const contents = [...doc.querySelectorAll('.content')];
        return contents.map(content => content.textContent.trim()).join('\n\n');
    } catch (error) {
        console.error(error);
        return `Error fetching ${url}: ${error.message}`;
    }
};

const copyContentFromPage = async (pageUrl) => {
    let text = '';

    if (pageUrl === 'all') {
        for (const page of pages) {
            const content = await fetchAndExtractContent(page);
            if (content) {
                text += '\n\n\n\n' + content;
            }
        }
    } else {
        text = await fetchAndExtractContent(pageUrl);
    }

    try {
        await navigator.clipboard.writeText(text.trim());
    } catch (error) {
        console.error('Fehler beim Kopieren in die Zwischenablage:', error);
    }
};

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
                    <button class="copy-button" onclick="copyContentFromPage('all')">📋</button>
                </li>
                <ul>
                    <li>
                        <a href="${baseUrl}/heirs-of-the-new-world/adepten.html">Adepten</a>
                        <button class="copy-button" onclick="copyContentFromPage('adepten.html')">📋</button>
                    </li>
                    <li>
                        <a href="${baseUrl}/heirs-of-the-new-world/kultstaette.html">Kultstätte</a>
                        <button class="copy-button" onclick="copyContentFromPage('kultstaette.html')">📋</button>
                    </li>
                    <li>
                        <a href="${baseUrl}/heirs-of-the-new-world/hohe-priester.html">Hohe Priester</a>
                        <button class="copy-button" onclick="copyContentFromPage('hohe-priester.html')">📋</button>
                    </li>
                    <li>
                        <a href="${baseUrl}/heirs-of-the-new-world/kultfuehrer.html">Kultführer</a>
                        <button class="copy-button" onclick="copyContentFromPage('kultfuehrer.html')">📋</button>
                    </li>
                    <li>
                        <a href="${baseUrl}/heirs-of-the-new-world/akademie.html">Akademie</a>
                        <button class="copy-button" onclick="copyContentFromPage('akademie.html')">📋</button>
                    </li>
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
    let baseUrl = window.location.origin;
    if (!baseUrl.toLowerCase().includes('/timobauermeister.github.io')) {
        baseUrl += '/timobauermeister.github.io';
    }

    const footerElement = document.createElement('footer');
    footerElement.innerHTML = `
      <p><a href="${baseUrl}/heirs-of-the-new-world/private.html" class="hidden-a">&copy;</a> 2024 WikiHazia. All rights reserved.</p>
    `;
    document.body.insertAdjacentElement('beforeend', footerElement);
}

loadHeader();
loadFooter();

