
// ------------------------------------------------------------------ Data
const chatHistoryData = [
    {
        mess: "Love that, were it from?",
        new: 1
    },
    {
        mess: "Thank you Hedy!",
        new: 0
    },
    {
        mess: "Love that, were it from?",
        new: 1
    },
    {
        mess: "Love that, were it from?",
        new: 1
    },
    {
        mess: "Thank you Hedy!",
        new: 0
    },
    {
        mess: "Here are some exciting destinat..",
        new: 1
    },

];

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

function renderChatHistory() {
    let i = 0;
    const renderItem = chatHistoryData.map((item) => {
        ++i;
        let checkNew = item.new ? "new" : "";
        return `
                <li onclick="selectE('.phone').innerHTML = chatBox;" class="chatHistory__item">
                    <div class="chatHistory__item__imgInner">
                        <img src="./Photos/logo2.png" alt="">
                    </div>
                    <div class="chatHistory__item__content">
                        <h2 class="chatHistory__item__content__name">Dizy #${i}</h2>
                        <p class="chatHistory__item__content__review ${checkNew}">${item.mess}</p>
                    </div>
                </li>
        `
    });

    selectE('.chatHistory').innerHTML += renderItem.join('') + `
            <h2 class="chatHistory__title">Chat History</h2>
    `;
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

                        <button onclick="selectE('.phone').innerHTML = chatManager;renderChatHistory(); document.getElementById('web-highlights-global-style-variables').remove();" class="secondaryButton borderCricle">
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
                    <button onclick="selectE('.phone').innerHTML = chatManager;renderChatHistory()" class="topBoard__buttonContainer__back">
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
const chatBoxNew =
    `
        <div class="topBoard">
            <div class="topBoard__background">
                <img src="./Photos/board__background.png" alt="">
            </div>
            <div class="topBoard__content">
                <div class="topBoard__buttonContainer">
                    <button onclick="selectE('.phone').innerHTML = chatManager;renderChatHistory()" class="topBoard__buttonContainer__back">
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
            </div>

        </div>
        <div class="sendBox">
            <input id="inputSendBox" type="text" placeholder="Type a message ...">
            <button class="sendBox__sendButton secondaryButton borderSquare">
                <i class="fa-regular fa-paper-plane"></i>
            </button>
        </div>
    `;
const chatManager =
    `
        <div class="topBoard">
            <div class="topBoard__background">
                <img src="./Photos/board__background.png" alt="">
            </div>
            <div class="topBoard__content">
                <div class="topBoard__buttonContainer">
                    <button onclick="selectE('.phone').innerHTML = accountScreen;" class="topBoard__buttonContainer__account">
                        <i class="fa-regular fa-user"></i>
                    </button>
                </div>
                <div class="topBoard__logo">
                    <img src="./Photos/logo2.png" alt="">
                </div>

            </div>
        </div>
        <div class="phoneView2">
            <ul class="chatHistory">
                <button onclick="selectE('.phone').innerHTML = chatBoxNew" class="secondaryButton borderSquare newChat">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </ul>
        </div>
`;

const accountScreen = `
        <div class="topBoard">
            <div class="topBoard__background">
                <img src="./Photos/board__background.png" alt="">
            </div>
            <div class="topBoard__content">
                <div class="topBoard__buttonContainer">
                    <button onclick="selectE('.phone').innerHTML = chatManager;renderChatHistory()"
                        class="topBoard__buttonContainer__back">
                        <i class="fa-solid fa-arrow-left-long"></i>
                    </button>
                </div>
                <div class="topBoard__logo">
                    <div class="account__avatar"></div>
                    <div class="camera">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                </div>
                <div class="phoneview">
                    <div class="account__profile">
                        <h1 class="account__name">Hedy Rio</h1>
                        <h2 class="account__email">hedyrio21@gmail.com</h2>
                    </div>
                    <div class="chatHistory__item account__timeSent">
                        <div class="chatHistory__item__imgInner">
                            <img src="./Photos/logo2.png" alt="">
                        </div>
                        <div class="chatHistory__item__content">
                            <p class="chatHistory__item__content__review ">Time Spent With Dizy</p>
                            <div class="timeSent__hours">
                                <i class="fa-regular fa-clock"></i>
                                <h2 class="chatHistory__item__content__name">2.478 Hours</h2>
                            </div>
                        </div>
                    </div>
                    <ul class="chatHistory account__option">
                        <li class="chatHistory__item account__option">
                            <div class="account__option__icon">
                                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            </div>
                            <h2 class="account__option__label">Logout</h2>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                        <li class="chatHistory__item account__option">
                            <div class="account__option__icon">
                                <i class="fa-solid fa-gear"></i>
                            </div>
                            <h2 class="account__option__label">Settings</h2>
                            <i class="fa-solid fa-chevron-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
`;
selectE('.phone').innerHTML = boardProgress;