import GenerateCPF from "../model/GenerateCPF";
import ValidCPF from "../model/ValidCPF";

const checkValue = (event) => {

    const objCPF = new ValidCPF(event.target.value);

    event.target.value = objCPF.formatCPF();

    if (objCPF.cleanCPF.length === 11) return objCPF.validate();
}

const validate = function (result) {
    if (result) {
        inpCPF.style.backgroundColor = 'yellowgreen';
        spnValidate.innerText = 'Valid CPF';
        spnValidate.style.color = 'green';
    } else {
        inpCPF.style.backgroundColor = 'tomato';
        spnValidate.innerText = 'Invalid CPF';
        spnValidate.style.color = 'red';
    }
}

const ctrlCPF = (event) => {
    switch (event.type) {
        case 'keyup':
            validate(checkValue(event));
            break;
        case 'submit':
            const cpf = new GenerateCPF();
            validate(true);
            return cpf.newCPF();
    }
};
export default ctrlCPF;