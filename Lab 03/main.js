const data = [
    {
        order: 1,
        name: 'MO231 - Pomeranian Trắng',
        gender: 1,
        age: '02',
        price: '6.900.000'
    },
    {
        order: 2,
        name: 'MO502 - Poodle Tiny Vàng',
        gender: 0,
        age: '02',
        price: '3.900.000'
    },
    {
        order: 3,
        name: 'MO102 - Poodle Tiny Sepia',
        gender: 0,
        age: '02',
        price: '4.000.000'
    },
    {
        order: 4,
        name: 'MO512 - Alaskan Malamute',
        gender: 1,
        age: '02',
        price: '8.900.000'
    },
    {
        order: 5,
        name: 'MO231 - Pembroke Corgi',
        gender: 1,
        age: '03',
        price: '6.500.000'
    },
    {
        order: 6,
        name: 'MO502 - Pembroke Corgi',
        gender: 1,
        age: '02',
        price: '5.900.000'
    },
    {
        order: 7,
        name: 'MO231 - Pomeranian Trắng',
        gender: 0,
        age: '02',
        price: '6.900.000'
    },
    {
        order: 8,
        name: 'MO512 - Poodle Tiny',
        gender: 1,
        age: '03',
        price: '7.900.000'
    }
]
const item = data.map((item) => {
    let genderShow = (item.gender)? 'Đực' : 'Cái';

    return `
        <li class="section2__list__item">
            <img src="./photos/dogs/dog${item.order}.jpg" alt="" class="item__img">
            <div class="item__content">
                <div class="item__content__name">
                    <h5>${item.name}</h5>
                </div>
                <div class="item__content__gender">
                    Giống: ${genderShow}
                </div>
                <div class="item__content__age">
                    Tuổi: ${item.age} tháng
                </div>
                <div class="item__content__price">
                    <b>${item.price} VND</b>
                </div>
            </div>
        </li>
    `;
});
document.querySelector('.section2__list').innerHTML += item.join('');