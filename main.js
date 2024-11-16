const style = document.querySelector('#style');
const pickChan = document.querySelectorAll('[name = "a"]');
const pickLe = document.querySelectorAll('[name = "b"]');

Dtime = [,'22H00', '21H00', '00H00']
Dline = [,'14/11/2024','16/11/2024', '00/00/0000']
Dstatus = [,'completed', 'warning', 'kick']

console.log(pickChan);

function chan() {

    pickChan.forEach(item => {
        item.classList.remove('TocBien');
    }
    )
    pickLe.forEach(item => {
        item.classList.add('TocBien');
    }
    )
}

function le() {
    pickLe.forEach(item => {
        item.classList.remove('TocBien');
    }
    )
    pickChan.forEach(item => {
        item.classList.add('TocBien');
    }
    )
}

function alla() {
    [...pickChan, ...pickLe].forEach(item => {
        item.classList.remove('TocBien');
    })
}

// Lab

for (let i = 1; i < Dline.length; i++) {
    const Ditem = document.querySelector('.section1__content__list');

    let j = 1;
    if(i < 10) {
        j = "0" + i;
    } else {
        j = i;
    }

    Ditem.innerHTML += `
        <a class="section1__content__list__item " href="/Lab ${j}/index.html">
            <div class="section1__content__list__item__status"> status</div>
            <div class="section1__content__list__item__title">
                <p>LAB</p>
                <b>${j}</b>
            </div>
            <div class="section1__content__list__item__deadline">
                Deadline:
                <p class="section1__content__list__item__date">
                <p class="time">${Dtime[i]}</p>
                <p class="date">${Dline[i]}</p>
                </p>
            </div>
            <div class="animation">
                <div class="animation__left"></div>
                <div class="animation__right"></div>
            </div>
        </a>
    `
}