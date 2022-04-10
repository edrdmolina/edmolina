// Scrolls to div with Id input

function scrollTo(id) {
    let top = document.getElementById(id).getBoundingClientRect().y - 90;
    window.scrollBy({ top, left: 0, behavior: 'smooth' });
}

export default scrollTo