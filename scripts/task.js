document.addEventListener('DOMContentLoaded', function () {
    let generateBtn = document.getElementById('generateBtn');
    generateBtn.addEventListener('click', function () {
        let lengthInput = document.getElementById('lengthInput');
        let digitsCheckbox = document.getElementById('digitsCheckbox');
        let upperCheckbox = document.getElementById('upperCheckbox');
        let lowerCheckbox = document.getElementById('lowerCheckbox');
        let resultTextarea = document.getElementById('resultTextarea');

        let length = parseInt(lengthInput.value, 10);
        let characters = '';
        if (digitsCheckbox.checked) characters += '0123456789';
        if (upperCheckbox.checked) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowerCheckbox.checked) characters += 'abcdefghijklmnopqrstuvwxyz';

        resultTextarea.value = generateRandomString(length, characters);
    });

    function generateRandomString(length, characters) {
        let result = '';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
});
