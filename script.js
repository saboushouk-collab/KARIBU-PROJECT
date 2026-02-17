const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        localStorage.setItem("user", "admin");
        window.location.href = "dashboard.html";
    });
}

if (window.location.pathname.includes("dashboard")) {
    if (!localStorage.getItem("user")) {
        window.location.href = "index.html";
    }
}

function logout() {
    localStorage.removeItem("user");
    window.location.href = "index.html";
}
