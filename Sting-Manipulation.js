

const message = "Itumeleng,Tshabalala,0613276126,Itumelengtshabalala8@gmail.com";

function getFieldByNr(message, Nr, delimiter) {
    let temp;
    for (let i = 0; i < Nr; i++) {
        temp = message.substring(0, message.charAt(delimiter) - 1);
        console.log(temp);
        // message = message.substring(message.charAt(delimiter) + 1, message.charAt(delimiter) + 1)
    }
    return temp;
}

console.log(getFieldByNr(message, 2, ','));