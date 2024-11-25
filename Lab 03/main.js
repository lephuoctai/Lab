const data = [
    {
        order: 1,
        code: 'MO231',
        name: 'Pomeranian Trắng',
        gender: 1,
        age: '02',
        price: '6.900.000'
    },
    {
        order: 2,
        code: 'MO502',
        name: 'Poodle Tiny Vàng',
        gender: 0,
        age: '02',
        price: '3.900.000'
    },
    {
        order: 3,
        code: 'MO102',
        name: 'Poodle Tiny Sepia',
        gender: 0,
        age: '02',
        price: '4.000.000'
    },
    {
        order: 4,
        code: 'MO512',
        name: 'Alaskan Malamute',
        gender: 1,
        age: '02',
        price: '8.900.000'
    },
    {
        order: 5,
        code: 'MO231',
        name: 'Pembroke Corgi',
        gender: 1,
        age: '03',
        price: '6.500.000'
    },
    {
        order: 6,
        code: 'MO502',
        name: 'Pembroke Corgi',
        gender: 1,
        age: '02',
        price: '5.900.000'
    },
    {
        order: 7,
        code: 'MO231',
        name: 'Pomeranian Trắng',
        gender: 0,
        age: '02',
        price: '6.900.000'
    },
    {
        order: 8,
        code: 'MO102',
        name: 'Poodle Tiny',
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
                    <h5>${item.code} - ${item.name}</h5>
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