function topScroll(){
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const menuMobile = 
    `<div>
        <h2>Comprar NFT</h2>
        <h2>Sobre</h2>
        <h2>FAQ</h2>
        <button class="button-conect">Conectar carteira</button>
    </div>`;

    let nav = document.querySelector('nav');
function clickMenu(){
    nav.classList.toggle('active');
}

function closeMenu(){
    nav.classList.toggle('active');
}