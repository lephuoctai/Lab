const style = document.querySelector('#style');
const pickChan = document.querySelectorAll('[name = "a"]');
const pickLe = document.querySelectorAll('[name = "b"]');

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