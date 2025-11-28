document.addEventListener("DOMContentLoaded", function () {
    const inputData = document.getElementById("dataAgendamento");

    if (inputData) {
        const hoje = new Date().toISOString().split("T")[0];
        inputData.setAttribute("min", hoje);
    }
});