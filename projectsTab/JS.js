const btns = document.querySelectorAll(".modal-open");
const close_btns = document.querySelectorAll(".modal-close");
const overlay = document.getElementById("overlay");

btns.forEach((btn) => {
    const target = btn.dataset.target;
    btn.addEventListener("click", () => {
        document.querySelector(target).classList.add("active");
        overlay.classList.add("active");
    })
})

close_btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.querySelector(btn.dataset.target).classList.remove("active");
        overlay.classList.remove("active");
    })
})

window.onclick = (e) => {
    if (e.target == overlay) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modal) => modal.classList.remove("active"));
        overlay.classList.remove("active");
    }
}


