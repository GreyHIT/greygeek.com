// 2. Функція перевірки мобільного телефону
function check2() {
    const phoneInput = document.getElementById("phone").value;
    const phonePattern = /^(?:\+?380|0)?(50|63|66|67|68|73|91|92|93|94|95|96|97|98|99)\d{7}$/;
    const resultElement = document.getElementById("phone1");
    if (phonePattern.test(phoneInput)) {
        resultElement.textContent = "Це валідний номер телефону";
        resultElement.className = "success";
    } else {
        resultElement.textContent = "Це не валідний номер телефону";
        resultElement.className = "error";
    }
}

// 3. Функція перевірки поштового індексу
function check3() {
    const postcodeInput = document.getElementById("postcode").value;
    const postcodePattern = /^65[0-4]\d{2}$/;
    const resultElement = document.getElementById("postcode1");

    if (postcodePattern.test(postcodeInput)) {
        resultElement.textContent = "Це валідний поштовий індекс";
        resultElement.className = "success";
    } else {
        resultElement.textContent = "Це не валідний поштовий індекс";
        resultElement.className = "error";
    }
}

// 4. Функція видалення HTML-коментарів
function check4() {
    let htmlInput = document.getElementById("html").value;
    const commentPattern = /<!--.*?-->/gs;
    const resultElement = document.getElementById("html1");
    const result = htmlInput.replace(commentPattern, '');

    resultElement.textContent = result;
    resultElement.className = "";
}

// 5. Функція видалення специфічних HTML тегів
function check5() {
    let htmlInput = document.getElementById("html2").value;
    const tagPattern = /<\/?(p|font|br|hr)[^>]*>/gi;
    const resultElement = document.getElementById("html3");
    const result = htmlInput.replace(tagPattern, '');

    resultElement.textContent = result;
    resultElement.className = "";
}

// 6. Функція видалення зайвих пробілів
function check6() {
    let textInput = document.getElementById("pinput").value;
    const resultElement = document.getElementById("presult");
    const result = textInput.trim();

    resultElement.textContent = `"${result}"`;
    resultElement.className = "";
}

// 7. Функція перевірки року від 1900 до 2099
function check7() {
    const yearInput = document.getElementById("yearinput").value;
    const yearPattern = /^(19\d{2}|20\d{2})$/;
    const resultElement = document.getElementById("yearresult");

    if (yearPattern.test(yearInput)) {
        resultElement.textContent = "Це валідний рік";
        resultElement.className = "success";
    } else {
        resultElement.textContent = "Це не валідний рік";
        resultElement.className = "error";
    }
}
