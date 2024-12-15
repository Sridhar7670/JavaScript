const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
        if (input.value.length === 0) {
            input.style.border = ""; // Reset to default
        } else {
            input.style.border = "2px solid blue "; // Apply blue border
        }
        input.value = input.value.replace(/[^0-9]/g, '');
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !input.value && index > 0) {
            inputs[index - 1].focus();
        }
    });
});
