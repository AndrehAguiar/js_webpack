export default class Dom {
    constructor() {
        this.createH1 = (args) => {
            const h1 = document.createElement('h1');
            h1.innerText = args.text;
            return h1;
        };
        this.createH2 = (args) => {
            const h2 = document.createElement('h2');
            h2.innerText = args.text;
            return h2;
        };
        this.createH3 = (args) => {
            const h3 = document.createElement('h3');
            h3.innerText = args.text;
            return h3;
        };
        this.createNav = (args) => {
            const nav = document.createElement('nav');
            nav.id = args.id;
            nav.innerText = args.id;
            return nav;
        };
        this.createSpan = (args) => {
            const span = document.createElement('span');
            span.id = args.id;
            span.innerText = args.text;
            span.className = args.class;
            return span;
        };
        this.createDiv = (args) => {
            const div = document.createElement('div');
            div.id = args.id;
            div.innerText = args.text;
            div.className = args.class;
            return div;
        };
        this.createLabel = (args) => {
            const label = document.createElement('label');
            label.id = args.id;
            label.htmlFor = args.for;
            label.innerText = args.text;
            return label;
        };
        this.createForm = (args) => {
            const form = document.createElement('form');
            form.id = args.id;
            form.method = args.method;
            form.action = args.action;
            return form;
        };
        this.createInput = (args) => {
            const input = document.createElement('input');
            input.type = args.type;
            input.id = args.id;
            input.className = args.class;
            return input;
        };
        this.createButton = (args) => {
            const button = document.createElement('button');
            button.type = args.type;
            button.id = args.id;
            button.innerText = args.text;
            return button;
        };
        this.createDL = (args) => {
            const dl = document.createElement('dl');
            dl.id = args.id;
            dl.innerText = args.text;
        };
    }
}