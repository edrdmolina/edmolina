// Scrolls to div with Id input

function scrollTo(id) {
    const section = document.getElementById(id);
    if (section) {
        const top = section.getBoundingClientRect().y - 90;
        window.scrollBy({ top, left: 0, behavior: 'smooth' });
    }
}

export default scrollTo