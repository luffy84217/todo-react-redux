export function $(selector, el) {
    if (!el) {
        el = document.body;
    }
    return el.querySelector(selector);
}

export function $$(selector, el) {
     if (!el) {
        el = document.body;
    }
     return el.querySelectorAll(selector);
}