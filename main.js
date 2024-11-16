Dtime = [, '22H00', '21H00', '00H00'];
Dline = [, '14/11/2024', '16/11/2024', '00/00/0000'];
statusBoard = ['warning', 'completed']; // 0, 1
Dstatus = [, 1, 0, 0]

// Lab
for (let i = 1; i < Dtime.length; i++) {
    const Ditem = document.querySelector('.section1__content__list');

    let j = String(i).padStart(2, '0');

    // set status
    if (Dstatus[i]) {
        document.querySelector(`.section1__item${i}`).style.setProperty('--color-status', '#5eff63');
    };


    Ditem.innerHTML += `
        <a class="section1__content__list__item section1__item${i}" href="/Lab ${j}/index.html">
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

