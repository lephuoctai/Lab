// ------------------------------------------------------------------ FUCTIONS
// Select the element
function selectE(className) {
    return document.querySelector(className) || console.log('selectE: Accept only .Class or #ID');
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
const boardProgress = 
    `    
        <div class="phone__screen1">
            <div class="phone__container">
                <ul class="progressBar">
                    <li class="active"></li>
                    <li></li>
                    <li></li>
                </ul>
                <div class="logo">
                    <img src="./Photos/logo.png" alt="">
                </div>
                <div class="board">
                    <div class="board__content">
                        <h1>We Don’t Sleep</h1>
                        <p>Dizy Bot always available 24/7. Don’t worry, we are online on midnight!</p>

                        <button onclick="selectE('.phone').innerHTML = chatBox" class="secondaryButton borderCricle">
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <div class="board__background">
                        <img src="./Photos/board__background.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    `;

    
// selectE('.phone').innerHTML = boardProgress;