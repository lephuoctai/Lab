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
];
const data2 = [
    {
        order: 1,
        title: "Pomeranian là gì? Cách nhận biết chó Pomeranian",
        info: "Pomeranian hay còn gọi là chó Pomeranian (chó Pom) luôn nằm trong top những thú cưng dễ thương nhất. Không chỉ vậy, giống chó xiế.."
    },
    {
        order: 2,
        title: "Chế độ ăn cho chó bạn cần biết",
        info: "Việc chia khẩu phần ăn cho chó thoạt nghe có vẻ đơn giản nhưng có một số quy tắc bạn nên biết để chó cưng dễ dàng hấp thụ các chất.."
    },
    {
        order: 3,
        title: "Tại sao chó cắn phá đồ đạc và cách phòng ngừa hiệu quả",
        info: "Chó cắn là hiện tượng phổ biến trong quá trình phát triển. Tuy nhiên, không ai muốn thấy đồ đạc, vật dụng quang trọng của mình bị chó cắn."
    }
];

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

const item2 = data2.map((item) => {
    return `
        <div class="section4__list__item">
            <div class="section4__list__item__imgInner">
                <img src="./photos/dogs/dogss3${item.order}.jpg" alt="">
            </div>
            <div class="section4__list__item__content">
                <div class="section4__list__item__content__tag">
                    <h3>Kiến thức thú cưng</h3>
                </div>
                <div class="section4__list__item__content__title">
                    <h5>${item.title}</h5>

                </div>
                <div class="section4__list__item__content__paragraph">
                    <p>${item.info}</p>
                </div>
            </div>
        </div>
    `
});
document.querySelector('.section4__list').innerHTML += item2.join('');
document.querySelectorAll('.section4__list, .section2__list').forEach((element) => {
    element.innerHTML += `
    <button class="section2__list__more">
        <h4>Xem thêm</h4>
        <i class="fa-solid fa-chevron-right"></i>
    </button>
`;
})