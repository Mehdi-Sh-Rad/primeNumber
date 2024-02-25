let number = +prompt("لطفا عدد مورد نظر خود را وارد کنید");
isAvval(number)
function isAvval(number) {
    if (number < 0) {
        alert("لطفا عدد مثبت وارد کنید")
    } else if (number == 0 || number == 1) {
        alert(`${number} عدد اول نمی باشد`)
    } else {
        for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
            if (number % i == 0) {
                alert(`${number} عدد اول نمی باشد`);
                break;
            } else {
                alert(`${number} عدد اول می باشد`)
                break;
            }
        }
    }
}


