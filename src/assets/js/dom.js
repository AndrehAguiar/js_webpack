const createH1 = (args) => {
    const h1 = document.createElement('h1');
    h1.innerText = args.text;
    return h1;
}
const createNav = (args) => {
    const nav = document.createElement('nav');
    nav.id = args.id;
    nav.innerText = args.id;
    return nav;
}

const createSpan = (args) => {
    const span = document.createElement('span');
    span.id = args.id;
    span.innerText = args.text;
    return span;
}
const createLabel = (args) => {
    const label = document.createElement('label');
    label.id = args.id;
    label.htmlFor = args.for;
    label.innerText = args.text;
    return label;
}
const createForm = (args) => {
    const form = document.createElement('form');
    form.id = args.id;
    form.method = args.method;
    form.action = args.action;
    return form;
}
const createInput = (args) => {
    const input = document.createElement('input');
    input.type = args.type;
    input.id = args.id;
    input.class = args.class;
    return input;
}
const createButton = (args) => {
    const button = document.createElement('button');
    button.type = args.type;
    button.id = args.id;
    button.innerText = args.text;
    return button;
}

export {
    createH1,
    createNav,
    createSpan,
    createForm,
    createInput,
    createLabel,
    createButton
};