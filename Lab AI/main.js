
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

                        <button onclick="selectE('.phone').innerHTML = chatBox; document.getElementById('web-highlights-global-style-variables').remove();" class="secondaryButton borderCricle">
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
const chatBox = 
    `
    
        <div class="topBoard">
            <div class="topBoard__background">
                <img src="./Photos/board__background.png" alt="">
            </div>
            <div class="topBoard__content">
                <div class="topBoard__buttonContainer">
                    <button onclick="selectE('.phone').innerHTML = boardProgress" class="topBoard__buttonContainer__back">
                        <i class="fa-solid fa-arrow-left-long"></i>
                    </button>
                    <button class="topBoard__buttonContainer__settings">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </div>
                <div class="topBoard__logo">
                    <img src="./Photos/logo2.png" alt="">
                </div>

            </div>
        </div>
        <div class="phoneView">
            <div class="chatBox">
                <ul class="chatBoxDizyList">
                    <li class="chatBoxDizyList__message">Hi Hedy! Dizy here!</li>
                </ul>
                <ul class="chatBoxUserList">
                    <li class="chatBoxUserList__message">Hello Dizy!</li>
                    <li class="chatBoxUserList__message">How are you? Good?</li>
                </ul>
                <ul class="chatBoxDizyList">
                    <li class="chatBoxDizyList__message">I’m fantastic!</li>
                </ul>
                <ul class="chatBoxUserList">
                    <li class="chatBoxUserList__message">I’ve just broke up with my GF :(</li>
                </ul>
                <ul class="chatBoxDizyList">
                    <li class="chatBoxDizyList__message">Sorry to hear that, don’t be sad</li>
                </ul>
                </ul>
                <ul class="chatBoxUserList">
                    <li class="chatBoxUserList__message">I'm boring now</li>
                    <li class="chatBoxUserList__message">Recomend me some destination!</li>
                </ul>
                <ul class="chatBoxDizyList">
                    <li class="chatBoxDizyList__message">Here are some exciting destinations for you to explore based on
                        your interests! https://www.phuquocislandguide.com/</li>
                </ul>
            </div>

        </div>
        <div class="sendBox">
            <input id="inputSendBox" type="text" placeholder="Type a message ...">
            <button class="sendBox__sendButton secondaryButton borderSquare">
                <i class="fa-regular fa-paper-plane"></i>
            </button>
        </div>
    `;
    
// selectE('.phone').innerHTML = boardProgress;