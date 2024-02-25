let number = +prompt("لطفا عدد مورد نظر خود را وارد کنید");
isAvval(number)
function isAvval(number) {
    if (number < 0) {
        alert("لطفا عدد مثبت وارد کنید")
    } else if (number == 0 | number == 1) {
        alert(`${number} عدد اول نمی باشد`)
    } else {
        for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
            const resutl = number % i == 0 ? `${number} عدد اول نمی باشد` : `${number} عدد اول می باشد`;
            alert(resutl);
            break;
        }
    }
}


