function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleButton = document.querySelector('.toggle-btn');
    
    sidebar.classList.toggle('show');
    if (sidebar.classList.contains('show')) {
        toggleButton.style.left = '265px'; // Adjust button position when sidebar is shown
    } else {
        toggleButton.style.left = '15px'; // Reset button position when sidebar is hidden
    }
}

function navigateTo(page) {
    window.location.href = page;
}
