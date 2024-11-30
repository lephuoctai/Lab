nameType = [, 'mountain', 'mountain', 'road', 'road', 'road', 'mountain'];
content__name = [, 'Pinarello', 'Pina Mountai', 'Pina Bike', 'Pinarello', 'Pinarello', 'Pinarello'];
content__price__value = [, '1800', '1700', '1500', '1900', '2700', '1750'];

const data = [
    {
        name: "mountain",
        product: "Pinarello",
        price: 1800,
    },
    {
        name: "mountain",
        product: "Pina Mountai",
        price: 1700,
    },
    {
        name: "road",
        product: "Pina Bike",
        price: 1500,
    },
    {
        name: "road",
        product: "Pinarello",
        price: 1900,
    },
    {
        name: "road",
        product: "Pinarello",
        price: 2700,
    },
    {   
        name: "mountain",
        product: "Pinarello",
        price: 1750,
    }
];





function openScreen(toScreen) {
    for (let i = 1; i < 3; i++) {
        document.querySelector(".screen0" + i).style.display = 'none';
    }
    document.querySelector(".screen0" + toScreen).style.display = 'flex';
}
function backScreen(toScreen) {
    document.querySelector(".screen0" + (toScreen + 1)).style.display = 'none';
    document.querySelector(".screen0" + toScreen).style.display = 'flex';
}

// Screen 03
function openModal(toScreen, index) {
    const open = document.querySelector('.screen0' + ++toScreen);

    openScreen(toScreen);
    open.innerHTML = `
        <div class="imgInner">
            <img src="./Lab02_photos/bike${index}.png" alt="" class="screen03__img">
        </div>
        <div class="screen03__content">
            <div class="screen03__content__name">
                ${content__name[index]}

                <div class="screen03__content__price">
                    <div class="screen03__content__price__off">15% OFF I ${content__price__value[index] - content__price__value[index] * 0.15}$</div>

                    <div class="screen03__content__price__value">${content__price__value[index]}$</div>
                </div>
            </div>
            <div class="screen03__content__description">
                <h3>Description</h3>
                <p>It is a very important form of writing as we write almost everything in paragraphs, be it an
                    answer, essay, story, emails, etc.</p>
            </div>
            <div class="screen03__content__button">
                <div class="screen03__content__cta">
                    <div class="favourited">
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <button onclick = "backScreen(2)">Add to cart</button>
                </div>
            </div>
        </div>
    `
}

// Screen 02


for (let i = 1; i <= data.length; i++) {
    const listItem = document.querySelector('.list');

    listItem.innerHTML += `
                <li onclick="openModal('2','${i}')" name="${nameType[i]}">
                    <div class="favourited">
                        <i class="fa-solid fa-heart"></i>
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="content">
                        <img class="content__img" src="./Lab02_photos/bike${i}.png" alt="">
                        <div class="content__name">${content__name[i]}</div>
                        <div class="content__price">
                            $<div class="content__price__value">${content__price__value[i]}</div>
                        </div>
                    </div>
                </li>
    `

}

//filter
function showTag(element) {
    ID = element.getAttribute('name');

    document.querySelectorAll('.list li').forEach(item => {
        item.style.display = 'none';
    });
    if (ID === 'mountain') {
        document.querySelector('.list li[name="mountain"]').classList.add('check')
        document.querySelectorAll('.list li[name="mountain"').forEach(item => {
            item.style.display = 'flex';
        });
    }
    else if (ID === 'road') {
        document.querySelectorAll('.list li[name="road"]').forEach(item => {
            item.style.display = 'flex';
        });
    }
    else {
        document.querySelectorAll('.list li').forEach(item => {
            item.style.display = 'flex';
        });
    }
    document.querySelectorAll('.filter li').forEach(item => {
        item.classList.remove('checked');
    });
    document.querySelector(`.filter li[name = "${ID}"]`).classList.add('checked');

}