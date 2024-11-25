Dtime = [, '22H00', '21H00', '00H00'];
Dline = [, '14/11/2024', '16/11/2024', '00/00/0000'];
statusBoard = ['warning', 'completed']; 
Dstatus = [, 1, 0, 0]

const dataLab = [
    {
        lab: 1,
        status: 1,
        time: "22H00",
        deadline: "14/11/2024"
    },
    {
        lab: 2,
        status: 0,
        time: "21H00",
        deadline: "16/11/2024"
    },
    {
        lab: 3,
        status: 0,
        time: "00H00",
        deadline: "00/00/0000"
    },
    {
        lab: "T1",
        status: 0,
        time: "00H00",
        deadline: "00/00/0000"
    },
    {
        lab: "TH",
        status: 0,
        time: "00H00",
        deadline: "TRIET HOC M-L"
    }
];

const Ditem = document.querySelector('.section1__content__list');
document.querySelector('header').innerHTML += `
    <style>
        
    </style>
`;

const cards = dataLab.map((item) => {
    let j = String(item.lab).padStart(2, '0');

    return `
        <a class="section1__content__list__item section1__item${item.lab}" href="/Lab ${j}/index.html">
            <div class="section1__content__list__item__status"> status</div>
            <div class="section1__content__list__item__title">
                <p>LAB</p>
                <b>${j}</b>
            </div>
            <div class="section1__content__list__item__deadline">
                Deadline:
                <p class="section1__content__list__item__date">
                <p class=time>${item.time}</p>
                <p class="date">${item.deadline}</p>
            </div>
            <div class="animation">
                <div class="animation__left"></div>
                <div class="animation__right"></div>
            </div>
        </a>
        `;
})
Ditem.innerHTML = cards.join('');
/* Subtract */
