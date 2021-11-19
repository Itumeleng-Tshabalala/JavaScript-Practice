
/* 
*
*
  Get a field by number
*
*
*/
const message = "Itumeleng,Tshabalala,0613276126,Itumelengtshabalala8@gmail.com";

function getFieldByNr(message, Nr, delimiter) {
    let temp;
    message += ',';
    for (let i = 0; i < Nr; i++) {
        temp = message.substring(0, message.indexOf(delimiter));
        message = message.substring(message.indexOf(delimiter) + 1);
    }
    return temp;
}

console.log(getFieldByNr(message, 2, ','));