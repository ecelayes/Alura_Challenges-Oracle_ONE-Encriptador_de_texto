const keys = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
const inputMessage = document.querySelector(".input-message");
const outputMessage = document.querySelector(".output-message");
const outputInfo = document.querySelector(".output-info");
const outputText = document.querySelector(".output-text");
outputText.style.display = "none";
outputInfo.style.display = "block";

function validateMessage(message) {
    let validator = message.match(/^[a-z\s]*$/);
    if (!validator || validator === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encrypt(message) {
    for (let index = 0; index < keys.length; index++) {
        if (message.includes(keys[index][0])) {
            message = message.replaceAll(keys[index][0], keys[index][1]);
        }
    }
    return message;
}

function decrypt(message) {
    for (let index = 0; index < keys.length; index++) {
        if (message.includes(keys[index][1])) {
            message = message.replaceAll(keys[index][1], keys[index][0]);
        }
    }
    return message;
}

function switchOutputInfo(outInfo) {
    return outInfo == "block" ? outputInfo.style.display = "none" : outputInfo.style.display = "block";
}

function switchOutputText(outText) {
    return outText == "none" ? outputText.style.display = "block" : outputText.style.display = "none";
}

function btnEncrypt() {
    if (!validateMessage(inputMessage.value)) {
        switchOutputInfo(outputInfo.style.display)
        const encryptMessage = encrypt(inputMessage.value);
        outputMessage.value = encryptMessage;
        inputMessage.value = "";
        switchOutputText(outputText.style.display)
    }
}

function btnDecrypt() {
    switchOutputInfo(outputInfo.style.display)
    const decryptMessage = decrypt(inputMessage.value);
    outputMessage.value = decryptMessage;
    inputMessage.value = "";
    switchOutputText(outputText.style.display)
}

function btnCopy() {
    switchOutputText(outputText.style.display)
    outputMessage.select();
    navigator.clipboard.writeText(outputMessage.value);
    outputMessage.value = "";
    switchOutputInfo(outputInfo.style.display)
}