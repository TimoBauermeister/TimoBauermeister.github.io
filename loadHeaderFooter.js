function loadHeader() {
    const headerElement = document.createElement('header');
    headerElement.innerHTML = `
      <a href="/" class="logo">WikiHazia</a>
    `;
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
