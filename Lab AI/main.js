// ------------------------------------------------------------------ FUCTIONS
// Select the element
function selectE(className) {
    if (className.includes('.'))
        return document.querySelector(className);
    else if (className.includes('#'))
        return document.querySelector(className);
    else
        return console.log('selectE: Accept only .Class or #ID');
}
// Check if the element exists
function pushContent(selectElement, content) {
    if (selectE(selectElement)) {
        selectE(selectElement).innerHTML += content;
        return;
    }
    else {
        return console.log('pushContent: Element (' + selectElement + ') not found');
    }
}

//------------------------------------------------------------------- RENDER/DOM

