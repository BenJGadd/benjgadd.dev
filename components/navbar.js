document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('navbar-container');
    try {
        container.innerHTML = await (await fetch('components/navbar.html')).text();
        const navToggle = document.getElementById('nav-toggle');
    } catch (error) {
        console.error('Navbar loading failed:', error);
    }
}); 