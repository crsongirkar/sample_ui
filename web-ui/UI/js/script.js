function toggleNav() {
    const verticalNav = document.getElementById("verticalNav");
    const openBtn = document.querySelector('.open-btn');

    if (verticalNav.style.width === "120px") {
        verticalNav.style.width = "0";
        setTimeout(() => openBtn.style.display = 'block', 0); // Display the button after closing animation
    } else {
        verticalNav.style.width = "120px";
        openBtn.style.display = 'none'; // Hide the button when opening
    }
}