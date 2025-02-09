let temp = 0;
document.querySelectorAll(".item").forEach((e) => {
    e.addEventListener("click", function () {
        // Xoá active cũ
        document.querySelectorAll(".item").forEach(() => {
            const itemActive = document.querySelector('.item2');
            if (itemActive) {
                itemActive.classList.remove('item2');
            }
        });

        // thêm active vào thẻ được click
        this.classList.add("item2");
    });
});
