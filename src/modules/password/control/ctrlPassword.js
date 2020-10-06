import PassGenerator from '../model/PassGenerator';
/*
MAIUSCULAS: 65 a 90
MINUSCULAS: 97 a122
NUMEROS: 48 a 57
TODOS CARACTERES: 33 a 126
*/

const checkChar = (charCode, password) => {
    let strChar = null;
    if (password.small.includes(charCode) && password.lower) return String.fromCharCode(charCode);
    if (password.capital.includes(charCode) && password.upper) return String.fromCharCode(charCode);
    if (password.number.includes(charCode) && password.num) return String.fromCharCode(charCode);
    if (password.special.includes(charCode) && password.specialChar) return String.fromCharCode(charCode);
    return strChar;
}

const createPass = (password) => {
    let newPassword = '';

    while (newPassword.length < password.len) {
        let charCode = PassGenerator.rand();
        let strChar = checkChar(charCode, password);
        if (strChar !== null) newPassword += strChar;
    }
    return newPassword;
}

const createError = (input, msg) => {
    console.log(input['special']);
    const span = document.createElement('span');
    span.classList.add('errorText');
    span.id = 'error';
    span.innerText = msg;
    input['special'].insertAdjacentElement('afterend', span);
}

const ctrlPass = (child) => {
    if (!child['error'] === false) child['error'].remove()
    const passLen = child['chars'].children['inpQtdChars'].value;
    const num = child['number'].children['inpNumber'].checked;
    const upper = child['upper'].children['inpUpper'].checked;
    const lower = child['lower'].children['inpLower'].checked;
    const special = child['special'].children['inpSpecial'].checked;

    const password = new PassGenerator({
        'passLen': passLen,
        'num': num,
        'upper': upper,
        'lower': lower,
        'special': special
    });

    if (!num && !upper && !lower && !special) {
        createError(child, 'Select an option.');
        return 'Nothing Selected'
    } else {
        return createPass(password);
    }
}

export default ctrlPass;