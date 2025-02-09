dataGameList = [
    {
        order: 1,
        game: "Bedwar",
        playerOnline: 56,
        version: "1.14+",
    },
    {
        order: 2,
        game: "Skywar",
        playerOnline: 32,
        version: "1.18+",
    },
    {
        order: 3,
        game: "Eggwar",
        playerOnline: 25,
        version: "1.12+",
    }
];

const gameList = dataGameList.map((item) => {
    return `
     <li class="section2__gameList__item item">
        <div class="section2__gameList__item__imgInner">
            <img src="./photos/game${item.order}.png" alt="">
        </div>
        <div class="section2__gameList__item__content">
            <div class="section2__gameList__item__content__title">
                <h3 class="primaryTitle">${item.game}</h3>
                <div class="section2__gameList__item__content__title__status">
                    <h6 class="playerOnline subTitle">${item.playerOnline} online</h6>
                    <p style="letter-spacing: 2px;">ver: ${item.version}</p>
                </div>
            </div>
        </div>
    </li>
    `;
});
const listItem = document.querySelectorAll('.section3__bottomBar__slot');
listItem.forEach((element) => {
    element.addEventListener('click', () => {
        
        document.querySelector('.checked').classList.remove('checked');
        element.classList.add('checked');
    });
});