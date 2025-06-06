function sendContactsForm() {
    // MASKA  
    const input = document.querySelector("#formTel");
    const iti = intlTelInput(input, {
        initialCountry: "lv",
        separateDialCode: true,
        preferredCountries: ["lv", "lt", "ru"],
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    // Обработка перед отправкой формы
    document.querySelector("form").addEventListener("submit", function (e) {
        // Вставляем полный номер в value (с кодом страны)
        input.value = iti.getNumber(); // например: +37112345678
    });

    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("form");
        const formMessage = document.createElement("div");
        formMessage.className = "form-message";
        form.appendChild(formMessage);

        // Создаем спиннер
        const loader = document.createElement("div");
        loader.className = "spinner";
        loader.style.display = "none"; // Скрываем по умолчанию
        formMessage.appendChild(loader);

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            formMessage.innerHTML = "";
            formMessage.style.color = "black";

            loader.style.display = "block"; // Показываем спиннер

            const formData = new FormData(form);

            try {
                const response = await fetch("/send.php", {
                    method: "POST",
                    body: formData,
                });

                const result = await response.json();

                loader.style.display = "none"; // Скрываем спиннер после ответа

                if (result.success) {
                    formMessage.style.color = "green";
                    formMessage.innerText = result.message;
                    form.reset();
                    grecaptcha.reset();
                } else {
                    formMessage.style.color = "red";
                    formMessage.innerHTML = result.errors.map(err => `<p>${err}</p>`).join('');
                }
            } catch (error) {
                loader.style.display = "none"; // Скрываем спиннер при ошибке
                formMessage.style.color = "red";
                formMessage.innerText = "An error occurred while submitting the form. Please try again later.";
            }
        });
    });
}

export default sendContactsForm;
