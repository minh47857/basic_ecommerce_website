// Script for navigation bar
const bar = document.getElementById('bar');
const closeBtn = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar) {
    bar.onclick = () => {
        nav.style.right = 0;
    }
}

if(closeBtn) {
    closeBtn.onclick = () => {
        nav.style.right = '-308px';
    }
}
